import Image from 'next/image'

import LogoImage from '@/assets/images/logo.png'
import AppImage from '@/assets/images/app.png'

export default function Home() {
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

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center">
            <input
              type="text"
              placeholder="Email address"
              className="h-12 px-4 lg:max-w-sm w-full rounded-lg outline-none placeholder:text-gray-400 border border-gray-600 bg-gray-900 text-white focus:border-gray-400 transition-all"
            />

            <button
              type="button"
              className="bg-gradient-to-r lg:bg-gradient-to-br from-mocha-orange to-mocha-pink h-12 px-6 whitespace-nowrap text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Join waitlist
            </button>
          </div>
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
