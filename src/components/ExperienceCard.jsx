import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'

function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false)
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
          <FontAwesomeIcon icon={faBuilding} className="experience-icon" />
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

      <button
        className="experience-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? t('experiences.hide_details') : t('experiences.view_details')}
        <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="highlights"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ul className="experience-highlights">
              {experience.highlights.map((_, index) => (
                <li key={index}>{e(`highlights.${index}`)}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExperienceCard
