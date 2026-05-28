import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import ServiceCard from '../components/ServiceCard'
import Metrics from '../components/Metrics'
import CVModal from '../components/CVModal'
import { services } from '../data/services'

const skills = ['Java', 'Spring Boot', 'SQL', 'Docker', 'REST APIs', 'Git']

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function Home() {
  const { t, language } = useLanguage()
  const [showCV, setShowCV] = useState(false)

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Pedro Trovo | Backend Developer</title>
        <meta name="description" content={t('home.bio')} />
        <meta property="og:title" content="Pedro Trovo | Backend Developer" />
        <meta property="og:description" content={t('home.bio')} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Pedro Trovo',
            jobTitle: 'Backend Developer',
            url: 'https://pedro-trovo.vercel.app',
            sameAs: [
              'https://github.com/pedro-Trovo',
              'https://www.linkedin.com/in/pedro-trovo-link/',
            ],
          })}
        </script>
      </Helmet>

      <section className="page home">
        <div className="home-hero">
          <motion.div
            className="home-photo-col"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div className="home-photo" variants={fadeUp}>
              <img src="/profile/161767490.png" alt="Pedro Trovo" className="home-photo-img" />
            </motion.div>
            <motion.div className="home-photo-buttons" variants={fadeUp}>
              <button onClick={() => setShowCV(true)} className="btn btn-secondary">
                <FontAwesomeIcon icon={faEye} /> {t('home.cv_view')}
              </button>
              <a href="/cv.pdf" download className="btn btn-icon" aria-label={t('home.cv_download')}>
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-info"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div className="home-status" variants={fadeUp}>
              <span className="status-dot" />
              <span className="status-text">{t('home.status')}</span>
            </motion.div>
            <motion.h1 className="home-name" variants={fadeUp}>{t('home.name')}</motion.h1>
            <motion.p className="home-title text-muted" variants={fadeUp}>{t('home.title')}</motion.p>
            <motion.p className="home-bio text-muted" variants={fadeUp}>{t('home.bio')}</motion.p>
            <motion.div className="home-skills" variants={fadeUp}>
              {skills.map((skill) => (
                <span key={skill} className="home-skill">{skill}</span>
              ))}
            </motion.div>
            <motion.div className="home-ctas" variants={fadeUp}>
              <Link to="/contato" className="btn btn-primary">{t('home.contact_cta')} &rarr;</Link>
              <Link to="/projetos" className="btn btn-secondary">{t('home.projects_cta')} &rarr;</Link>
              <Link to="/experiencias" className="btn btn-secondary">{t('home.experiences_cta')} &rarr;</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="page services-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('services.title')}
        </motion.h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      <Metrics />

      <CVModal open={showCV} onClose={() => setShowCV(false)} />
    </>
  )
}

export default Home
