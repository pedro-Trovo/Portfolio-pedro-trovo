import { useMemo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import { projects } from '../data/projects'
import { experiences } from '../data/experiences'
import { education } from '../data/education'

const homeSkills = ['Java', 'Spring Boot', 'SQL', 'Docker', 'REST APIs', 'Git']

const searchIndex = [
  ...projects.map((p) => ({
    type: 'project',
    title: p.title,
    subtitle: p.description,
    url: `/projetos/${p.slug}`,
    text: [p.title, p.subtitle, p.description, p.context, ...p.tags].filter(Boolean).join(' '),
  })),
  ...experiences.map((e) => ({
    type: 'experience',
    title: e.company,
    subtitle: e.role,
    url: '/experiencias/profissional',
    text: [e.company, e.role, e.description, ...e.tags].filter(Boolean).join(' '),
  })),
  ...education.map((e) => ({
    type: 'education',
    title: e.institution,
    subtitle: e.course,
    url: '/experiencias/academica',
    text: [e.institution, e.course, e.description, ...e.tags].filter(Boolean).join(' '),
  })),
  ...homeSkills.map((s) => ({
    type: 'skill',
    title: s,
    subtitle: null,
    url: '/',
    text: s,
  })),
]

const sectionOrder = ['project', 'experience', 'education', 'skill']

function SearchModal({ onClose }) {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []

    const grouped = { project: [], experience: [], education: [], skill: [] }

    searchIndex.forEach((item) => {
      if (item.text.toLowerCase().includes(q)) {
        grouped[item.type].push(item)
      }
    })

    return grouped
  }, [query])

  const totalCount = Object.values(results).reduce((sum, arr) => sum + arr.length, 0)

  const handleSelect = (url) => {
    navigate(url)
    onClose()
  }

  const sectionLabels = {
    project: t('projects.title'),
    experience: t('experiences.tab_professional'),
    education: t('experiences.tab_academic'),
    skill: 'Skills',
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <FontAwesomeIcon icon={faSearch} className="search-input-icon" />
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
          <button className="search-close-btn" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="search-body">
          {!query && (
            <p className="search-hint">{t('search.placeholder')}</p>
          )}

          {query && totalCount === 0 && (
            <p className="search-empty">{t('search.no_results')}</p>
          )}

          {sectionOrder.map((type) => {
            const items = results[type]
            if (!items || items.length === 0) return null
            return (
              <div key={type} className="search-section">
                <h3 className="search-section-title">{sectionLabels[type]}</h3>
                {items.map((item, i) => (
                  <button
                    key={`${type}-${i}`}
                    className="search-result"
                    onClick={() => handleSelect(item.url)}
                  >
                    <div className="search-result-text">
                      <span className="search-result-title">{item.title}</span>
                      {item.subtitle && (
                        <span className="search-result-subtitle">{item.subtitle}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
