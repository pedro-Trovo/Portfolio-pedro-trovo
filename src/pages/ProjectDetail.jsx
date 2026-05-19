import { useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeft,
  faExternalLinkAlt,
  faBookOpen,
  faTimes,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))
  }, [project])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))
  }, [project])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  if (!project) {
    return (
      <section className="page">
        <h1>Projeto não encontrado</h1>
        <p className="text-muted">
          <Link to="/projetos">Voltar para projetos</Link>
        </p>
      </section>
    )
  }

  return (
    <section className="page project-detail">
      <Link to="/projetos" className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
      </Link>

      <div className="project-detail-header">
        <div>
          <p className="project-detail-subtitle text-muted">{project.subtitle}</p>
          <h1 className="project-detail-title">{project.title}</h1>
          {project.context && (
            <p className="project-detail-context text-muted">{project.context}</p>
          )}
        </div>
        <div className="project-detail-links">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href={project.links.site} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Site
          </a>
          {project.links.doi && (
            <a href={project.links.doi} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FontAwesomeIcon icon={faBookOpen} /> DOI
            </a>
          )}
        </div>
      </div>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Sobre</h2>
        <p className="project-detail-text">{project.about}</p>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Funcionalidades</h2>
        <ul className="project-detail-features">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Arquitetura</h2>
        <p className="project-detail-text">{project.architecture}</p>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Tecnologias</h2>
        <div className="project-detail-stack">
          {project.techStack.map((group) => (
            <div key={group.category} className="project-detail-stack-group">
              <span className="project-detail-stack-label">{group.category}</span>
              <div className="project-detail-tags">
                {group.items.map((item) => (
                  <span key={item} className="project-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Limitações conhecidas</h2>
        <ul className="project-detail-features project-detail-limitations">
          {project.limitations.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-section-title">Galeria</h2>
        <div className="project-detail-gallery">
          {project.images.map((img, i) => (
            <button
              key={i}
              className="project-detail-gallery-item"
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage() }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <img
            className="lightbox-image"
            src={project.images[lightboxIndex]}
            alt={`${project.title} ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage() }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className="lightbox-counter">
            {lightboxIndex + 1} / {project.images.length}
          </span>
        </div>
      )}
    </section>
  )
}

export default ProjectDetail
