import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import SearchModal from './SearchModal'

function Header() {
  const { t } = useLanguage()
  const [showSearch, setShowSearch] = useState(false)

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
        <button className="header-search-btn" onClick={() => setShowSearch(true)} aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
    </header>
  )
}

export default Header
