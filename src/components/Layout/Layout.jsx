import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
