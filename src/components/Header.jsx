import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import { useMouseGlow } from '../hooks/useMouseGlow'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import SearchModal from './SearchModal'

function Header() {
  const { t } = useLanguage()
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const searchBtnRef = useMouseGlow()
  const hamburgerRef = useMouseGlow()

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
      <NavLink to="/" className="logo-link" aria-label="Pedro Trovo — Home">
        <svg width="150" height="28" viewBox="0 0 195 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontFamily="'Fira Code','JetBrains Mono',monospace" fontWeight="700" fontSize="18" fill="#62BBC1" letterSpacing="-0.3">&lt;P/&gt;</text>
          <line x1="65" y1="10" x2="65" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
          <text x="77" y="25" fontFamily="'Plus Jakarta Sans','Inter','Segoe UI',sans-serif" fontWeight="300" fontSize="18" fill="currentColor" letterSpacing="-0.3">pedro</text>
          <text x="137" y="25" fontFamily="'Plus Jakarta Sans','Inter','Segoe UI',sans-serif" fontWeight="700" fontSize="18" fill="currentColor" letterSpacing="-0.3">trovo</text>
        </svg>
      </NavLink>

      <nav className="header-nav-desktop">
        <NavLink to="/" end>{t('nav.home')}</NavLink>
        <NavLink to="/projetos">{t('nav.projects')}</NavLink>
        <NavLink to="/experiencias">{t('nav.experiences')}</NavLink>
        <NavLink to="/contato">{t('nav.contact')}</NavLink>
      </nav>

      <div className="header-actions">
        <button ref={searchBtnRef} className="header-search-btn btn-glow" onClick={() => setShowSearch(true)} aria-label="Search">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="header-actions-desktop">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <button
          ref={hamburgerRef}
          className="hamburger btn-glow"
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
