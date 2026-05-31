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
        <svg className="not-found-hex" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="64" height="64" rx="16" stroke="#62BBC1" strokeWidth="1.5" opacity="0.25"/>
          <rect x="16" y="16" width="48" height="48" rx="12" stroke="#818CF8" strokeWidth="1" opacity="0.15"/>
          <g stroke="#62BBC1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
            <polyline points="30,34 36,40 30,46"/>
            <line x1="40" y1="34" x2="46" y2="46"/>
            <polyline points="50,34 44,40 50,46"/>
          </g>
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
