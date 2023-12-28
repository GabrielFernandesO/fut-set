'use client'

import { Rajdhani } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import { usePathname } from 'next/navigation'




const rajdhani = Rajdhani({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {

  const pathName = usePathname()

  
  return (
    <html lang="en">
    

      <body className={rajdhani.className}>
        
        {(pathName !== '/') && (
          <NavBar></NavBar>
        )}
        
        {children}
      </body>
    </html>
  )
}
