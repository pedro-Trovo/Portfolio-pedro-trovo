import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <NavLink to="/" className="logo-link">
        <img src="/svg/Pedro_Trovo_Portfolio_logo.svg" alt="Pedro Trovo" width={40} height={40} />
      </NavLink>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/experiencias">Experiências</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
      <div className="header-actions">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
