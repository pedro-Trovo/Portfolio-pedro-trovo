import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

function Header() {
  const { t } = useLanguage()

  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img src="/svg/Pedro_Trovo_Portfolio_logo.svg" alt="Pedro Trovo" width={40} height={40} />
      </NavLink>
      <nav>
        <NavLink to="/" end>{t('nav.home')}</NavLink>
        <NavLink to="/projetos">{t('nav.projects')}</NavLink>
        <NavLink to="/experiencias">{t('nav.experiences')}</NavLink>
        <NavLink to="/contato">{t('nav.contact')}</NavLink>
      </nav>
      <div className="header-actions">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
