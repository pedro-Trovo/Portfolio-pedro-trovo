import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img src="/svg/logo_portfolio_official.svg" alt="Pedro Trovo" width={48} height={48} />
      </NavLink>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/experiencias">Experiências</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Header
