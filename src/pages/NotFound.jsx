import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="page not-found-page">
      <Helmet>
        <title>404 | Pedro Trovo</title>
      </Helmet>

      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="not-found-code">404</span>
        <h1>{t('404.title')}</h1>
        <p className="text-muted">{t('404.message')}</p>
        <Link to="/" className="btn btn-primary">{t('404.back')}</Link>
      </motion.div>
    </section>
  )
}

export default NotFound
