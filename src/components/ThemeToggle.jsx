import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (isLight) {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsLight((prev) => !prev)}
      aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
    >
      {isLight ? '\u263C' : '\u263E'}
    </button>
  )
}

export default ThemeToggle
