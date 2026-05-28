import { createContext, useContext, useState, useEffect } from 'react'
import pt from './pt.json'
import en from './en.json'

const translations = { pt, en }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('lang') || 'pt'
  })

  useEffect(() => {
    localStorage.setItem('lang', language)
  }, [language])

  const setLanguage = (lang) => {
    if (translations[lang]) setLanguageState(lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
