import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/projetos">{t('nav.projects')}</Link>
        <Link to="/experiencias">{t('nav.experiences')}</Link>
        <Link to="/contato">{t('nav.contact')}</Link>
      </div>
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
      <p className="footer-copy">{t('footer.copyright')}</p>
      <p className="footer-tech text-muted">{t('footer.made_with')}</p>
    </footer>
  )
}

export default Footer
