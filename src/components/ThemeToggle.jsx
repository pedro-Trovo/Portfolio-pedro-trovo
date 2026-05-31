import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

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
      <AnimatePresence mode="wait" initial={false}>
        {isLight ? (
          <motion.span
            key="sun"
            className="theme-toggle-icon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FontAwesomeIcon icon={faSun} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            className="theme-toggle-icon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FontAwesomeIcon icon={faMoon} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
