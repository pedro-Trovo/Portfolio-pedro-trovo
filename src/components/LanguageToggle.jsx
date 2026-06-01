import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../i18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useMouseGlow } from '../hooks/useMouseGlow'

const languages = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
]

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const langBtnRef = useMouseGlow()

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  const current = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="lang-wrapper" ref={wrapperRef}>
      <button
        ref={langBtnRef}
        className="lang-btn btn-glow"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="lang-label">{current.code.toUpperCase()}</span>
        <FontAwesomeIcon icon={faChevronDown} className="lang-arrow" />
      </button>
      {open && (
        <div className="lang-dropdown">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-option btn-glow${l.code === language ? ' lang-option--active' : ''}`}
              onClick={() => { setLanguage(l.code); setOpen(false) }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageToggle
