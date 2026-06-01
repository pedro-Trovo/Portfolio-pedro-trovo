import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faDownload } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'
import { useMouseGlow } from '../hooks/useMouseGlow'

function CVModal({ open, onClose }) {
  const { t } = useLanguage()
  const downloadRef = useMouseGlow()
  const closeRef = useMouseGlow()
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cv-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cv-modal-header">
              <span className="cv-modal-title">{t('cv.modal_title')}</span>
              <div className="cv-modal-actions">
                <a ref={downloadRef} href="/cv.pdf" download className="btn btn-primary btn-sm btn-glow">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </a>
                <button ref={closeRef} className="cv-modal-close btn-glow" onClick={onClose}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
            <div className="cv-modal-body">
              <embed src="/cv.pdf" type="application/pdf" className="cv-embed" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CVModal
