import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

const MotionLink = motion(Link)

function ProjectCard({ project }) {
  const { t } = useLanguage()

  return (
    <MotionLink
      to={`/projetos/${project.slug}`}
      className="project-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc text-muted">{t(`project.${project.slug}.description`)}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </MotionLink>
  )
}

export default ProjectCard
