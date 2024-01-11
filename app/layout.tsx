import type { Metadata } from 'next'
import './globals.scss'
import TopBar from '@/core/components/top-bar/TopBar'
import SideBar from '@/core/components/side-bar/SideBar'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Cardinal',
  description: 'Same App, New Framework',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <TopBar></TopBar>
            <SideBar></SideBar>
            <body className="">{children}</body>
        </html>
    )
}
