import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

import { twMerge } from 'tailwind-merge'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mocha – The new standard for project management.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={twMerge(plusJakartaSans.className, 'bg-gray-900')}>
        {children}
      </body>
    </html>
  )
}
