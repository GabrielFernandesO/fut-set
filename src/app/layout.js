'use client'

import { Rajdhani } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import { usePathname } from 'next/navigation'
import Footer from './components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './home/loading'




const rajdhani = Rajdhani({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {

  const pathName = usePathname()

  
  return (
    <html lang="en">
    

      <body className={rajdhani.className}>
        
        {(pathName !== '/') && (
          <NavBar></NavBar>
        )}
        <Suspense fallback={<Loading/>}>
        {children}
        </Suspense>
        <Footer></Footer>
      </body>
      
    </html>
  )
}
