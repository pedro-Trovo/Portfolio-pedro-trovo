import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
