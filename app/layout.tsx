import type { Metadata } from 'next'
import './globals.scss'
import { authUtil } from '@/core/utils/auth.util'
import TopBar from '@/core/components/top-bar/TopBar'
import SideBar from '@/core/components/side-bar/SideBar'

export const metadata: Metadata = {
  title: 'Cardinal',
  description: 'Same App, New Framework',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  if (!!authUtil.getAuthToken()) {
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
