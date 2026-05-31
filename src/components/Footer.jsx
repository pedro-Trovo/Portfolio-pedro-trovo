import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'

function Footer() {
  const { t } = useLanguage()

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
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-trovo-link/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:pedroramostrovo@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>
      </div>
      <div className="footer-divider" />
      <p className="footer-copy">{t('footer.copyright')}</p>
    </footer>
  )
}

export default Footer
