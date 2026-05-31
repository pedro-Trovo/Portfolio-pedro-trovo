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
        <svg className="not-found-hex" width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="28,2 56,18 28,30 0,18" fill="#62BBC1" opacity="0.3"/>
          <polygon points="0,18 28,30 28,58 0,48" fill="#30332E" opacity="0.3"/>
          <polygon points="56,18 56,48 28,58 28,30" fill="#EC058E" opacity="0.3"/>
          <polygon points="28,2 56,18 56,48 28,58 0,48 0,18" fill="none" stroke="#62BBC1" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
        </svg>
        <span className="not-found-code">404</span>
        <h1>{t('404.title')}</h1>
        <p className="text-muted">{t('404.message')}</p>
        <Link to="/" className="btn btn-primary">{t('404.back')}</Link>
      </motion.div>
    </section>
  )
}

export default NotFound
