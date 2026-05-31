import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'

function ExperienceCard({ experience }) {
  const { t } = useLanguage()

  const e = (key) => t(`experience.${experience.id}.${key}`)

  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35 }}
    >
      <div className="experience-header">
        <div className="experience-header-left">
          <div className="experience-icon">
            <img src="/images/logos/edi-labs.jpg" alt="Edi-Labs" className="experience-logo" />
          </div>
          <div>
            <h2 className="experience-company">{experience.company}</h2>
            <p className="experience-role">{experience.role}</p>
          </div>
        </div>
        <div className="experience-period">
          <FontAwesomeIcon icon={faCalendar} className="experience-period-icon" />
          <span>{experience.period}</span>
        </div>
      </div>

      <p className="experience-description">{e('description')}</p>

      <div className="experience-tags">
        {experience.tags.map((tag) => (
          <span key={tag} className="experience-tag">{tag}</span>
        ))}
      </div>

      <ul className="experience-highlights">
        {experience.highlights.map((_, index) => (
          <li key={index}>{e(`highlights.${index}`)}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ExperienceCard
