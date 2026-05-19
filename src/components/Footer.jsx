import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a
          href="https://github.com/pedro-Trovo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-trovo-link/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:pedroramostrovo@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className="footer-copy">&copy; 2026</p>
    </footer>
  )
}

export default Footer
