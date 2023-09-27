import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
import About from '@/components/about'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guess that City',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <title>Guess That City!</title>
      </head>
      <body className={inter.className +" h-fit relative"}>
        <div className="z-10 absolute bg-orange-400 h-full w-12 absolute rounded-br-full -top-12">
            <div className=" bg-orange-600 h-full w-6 rounded-br-full absolute -top-4">
            </div>
        </div>
        <Navbar></Navbar>
        {children}
        <About></About>
      </body>
    </html>
  )
}
