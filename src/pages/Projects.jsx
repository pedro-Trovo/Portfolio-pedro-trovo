import { useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n'

function Projects() {
  const { t, language } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || ''
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects

  const setTag = (tag) => {
    setOpen(false)
    if (tag === activeTag) return
    if (tag) {
      setSearchParams({ tag })
    } else {
      setSearchParams({})
    }
  }

  return (
    <section className="page projects">
      <Helmet>
        <html lang={language} />
        <title>{t('projects.title')} | Pedro Trovo</title>
        <meta name="description" content={`Portfolio — ${t('projects.title')}`} />
      </Helmet>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {t('projects.title')}
      </motion.h1>

      <motion.div
        className="filter-dropdown"
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <button
          className={`filter-dropdown-trigger${open ? ' filter-dropdown-trigger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span>{activeTag || t('projects.all')}</span>
          <FontAwesomeIcon icon={faChevronDown} className="filter-dropdown-chevron" />
        </button>
        {open && (
          <div className="filter-dropdown-menu">
            <button
              className={`filter-dropdown-option${!activeTag ? ' filter-dropdown-option--active' : ''}`}
              onClick={() => setTag('')}
            >
              {t('projects.all')}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-dropdown-option${activeTag === tag ? ' filter-dropdown-option--active' : ''}`}
                onClick={() => setTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        className="projects-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects
