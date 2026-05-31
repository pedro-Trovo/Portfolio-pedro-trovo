import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import SearchModal from './SearchModal'

function Header() {
  const { t } = useLanguage()
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img src="/svg/logo-header.svg" alt="Pedro Trovo" height={36} />
      </NavLink>

      <nav className="header-nav-desktop">
        <NavLink to="/" end>{t('nav.home')}</NavLink>
        <NavLink to="/projetos">{t('nav.projects')}</NavLink>
        <NavLink to="/experiencias">{t('nav.experiences')}</NavLink>
        <NavLink to="/contato">{t('nav.contact')}</NavLink>
      </nav>

      <div className="header-actions">
        <button className="header-search-btn" onClick={() => setShowSearch(true)} aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="header-actions-desktop">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      <div className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`}>
        <nav className="mobile-nav">
          <NavLink to="/" end>{t('nav.home')}</NavLink>
          <NavLink to="/projetos">{t('nav.projects')}</NavLink>
          <NavLink to="/experiencias">{t('nav.experiences')}</NavLink>
          <NavLink to="/contato">{t('nav.contact')}</NavLink>
        </nav>
        <div className="mobile-actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {showSearch && <SearchModal onClose={() => setShowSearch(false)} />}
    </header>
  )
}

export default Header
