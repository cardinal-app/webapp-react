import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { isLoggedIn } from '@/core/helpers/authentication'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cardinal',
  description: 'Same App, New Framework',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  if (isLoggedIn()) {
    return (
        <html lang="en">
          <TopBar></TopBar>
          <SideBar></SideBar>
          <body className="">{children}</body>
        </html>
    )
  } else {
    return (
        <html lang="en">
        <body className="">{children}</body>
        </html>
    )
  }
}
