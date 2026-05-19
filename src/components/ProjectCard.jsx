import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <Link to={`/projetos/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc text-muted">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
