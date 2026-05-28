import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ExperienceCard from '../components/ExperienceCard'
import { experiences } from '../data/experiences'
import { useLanguage } from '../i18n'

function Experiences() {
  const { t, language } = useLanguage()

  return (
    <section className="page experiences">
      <Helmet>
        <html lang={language} />
        <title>{t('experiences.title')} | Pedro Trovo</title>
        <meta name="description" content={`Portfolio — ${t('experiences.title')}`} />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {t('experiences.title')}
      </motion.h1>

      <div className="experiences-list">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
