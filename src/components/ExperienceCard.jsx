import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="experience-card">
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

      <p className="experience-description">{experience.description}</p>

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
        {expanded ? 'Recolher detalhes' : 'Ver detalhes'}
        <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} />
      </button>

      {expanded && (
        <ul className="experience-highlights">
          {experience.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceCard
