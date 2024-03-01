'use client'

import Image from 'next/image'

import LogoImage from '@/assets/images/logo.png'
import AppImage from '@/assets/images/app.png'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import axios from 'axios'

const formSchema = z.object({
  email: z.string().email(),
})

type FormData = z.infer<typeof formSchema>

export default function Home() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const isErrored = form.formState.errors.email?.message

  async function joinInWaitlist({ email }: FormData) {
    try {
      setIsLoading(true)

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/waitlist`, {
        email,
      })

      setIsJoined(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-[radial-gradient(50%_100%_at_50%_0%,#202024_0%,#121214_100%)] antialiased">
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col justify-between">
        <header className="px-6 lg:px-4 py-8 flex">
          <Image
            src={LogoImage}
            alt="Mocha"
            width={590}
            height={354}
            className="w-12 lg:w-14"
          />
        </header>

        <div className="flex flex-col gap-8 lg:gap-10 px-6 lg:px-4">
          <p className="text-4xl text-white text-center lg:text-7xl font-semibold max-w-5xl self-center">
            Mocha is the new standard for{' '}
            <span className="font-bold bg-gradient-to-br lg:bg-gradient-to-r from-mocha-orange to-mocha-pink text-background-gradient">
              project management
            </span>
          </p>

          <p className="text-white/75 text-center text-sm lg:text-lg">
            Collections, SQL client, notes, passwords, and more.
          </p>

          {isJoined ? (
            <div className="flex flex-col lg:flex-row justify-center">
              <div className="h-12 rounded-lg lg:px-16 flex items-center justify-center bg-green-950/30 border border-green-800 text-green-500 text-sm lg:text-base">
                You&apos;ve joined the waitlist!
              </div>
            </div>
          ) : (
            <form
              className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center"
              onSubmit={form.handleSubmit(joinInWaitlist)}
            >
              <div className="flex flex-col lg:max-w-sm w-full gap-1">
                <input
                  type="text"
                  placeholder="Email address..."
                  className="h-12 px-4 rounded-lg outline-none placeholder:text-gray-400 border border-gray-600 bg-gray-900 text-white focus:border-gray-400 data-[errored=true]:border-red-600 data-[errored=true]:bg-red-950/30 transition-all"
                  data-errored={!!isErrored}
                  {...form.register('email')}
                />

                {isErrored && (
                  <span className="text-red-600 text-sm">
                    Invalid email address... Try again.
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r lg:bg-gradient-to-br from-mocha-orange to-mocha-pink h-12 px-6 whitespace-nowrap text-white font-semibold rounded-lg enabled:hover:opacity-90 transition-all disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mx-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  'Join waitlist'
                )}
              </button>
            </form>
          )}
        </div>

        <div className="h-32 lg:h-64 bg-gray-800 rounded-tl-lg rounded-tr-lg mx-6 lg:mx-16 overflow-clip relative">
          <div className="inset-0 absolute bg-gradient-to-t from-black/75 to-black/10" />

          <Image
            src={AppImage}
            alt="App"
            className="w-full h-full object-cover object-top min-w-[640px]"
          />
        </div>
      </div>
    </div>
  )
}
