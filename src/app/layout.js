'use client'

import { Rajdhani } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'
import { usePathname } from 'next/navigation'
import Footer from './components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './loading'
import { ToastContainer } from 'react-toastify'




const rajdhani = Rajdhani({ subsets: ['latin'], weight: '400' })

export default function RootLayout({ children }) {

  const pathName = usePathname()


  return (
    <html lang="en">


      <body className={rajdhani.className}>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {(pathName !== '/login') && (pathName !== '/register') && (
          <NavBar></NavBar>
        )}
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        {(pathName !== '/login') && (pathName !== '/register') && (
          <Footer></Footer>
        )}

      </body>

    </html>
  )
}
