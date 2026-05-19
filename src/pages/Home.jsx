import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons'

const skills = ['Java', 'Spring Boot', 'SQL', 'Docker', 'REST APIs', 'Git']

function Home() {
  return (
    <section className="page home">
      <div className="home-hero">
        <div className="home-photo-col">
          <div className="home-photo">
            <img src="/profile/161767490.png" alt="Pedro Trovo" className="home-photo-img" />
          </div>
          <div className="home-photo-buttons">
            <a href="/cv.pdf" download className="btn btn-primary">
              <FontAwesomeIcon icon={faDownload} /> Curriculum Vitae
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="Visualizar currículo"
            >
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
        </div>
        <div className="home-info">
          <h1 className="home-name">Pedro Trovo</h1>
          <p className="home-title text-muted">Backend Developer</p>
          <p className="home-bio text-muted">
            Desenvolvedor backend com experiência em construir sistemas robustos e escaláveis.
            Apaixonado por tecnologia, código limpo e soluções bem projetadas.
          </p>
          <div className="home-skills">
            {skills.map((skill) => (
              <span key={skill} className="home-skill">{skill}</span>
            ))}
          </div>
          <div className="home-ctas">
            <Link to="/projetos" className="btn btn-primary">Projetos &rarr;</Link>
            <Link to="/experiencias" className="btn btn-secondary">Experiências &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
