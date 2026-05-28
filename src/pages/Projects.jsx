import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n'

function Projects() {
  const { t, language } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTag = searchParams.get('tag') || ''

  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects

  const setTag = (tag) => {
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
        className="projects-filters"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        <button
          className={`filter-chip${!activeTag ? ' filter-chip--active' : ''}`}
          onClick={() => setTag('')}
        >
          {t('projects.all')}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-chip${activeTag === tag ? ' filter-chip--active' : ''}`}
            onClick={() => setTag(tag)}
          >
            {tag}
          </button>
        ))}
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
