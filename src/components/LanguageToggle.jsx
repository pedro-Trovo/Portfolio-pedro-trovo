import { useLanguage } from '../i18n'

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      className="lang-toggle"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}

export default LanguageToggle
