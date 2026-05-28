import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '../i18n'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function Contato() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="page contact-page">
      <Helmet>
        <title>{t('contact.title')} | Pedro Trovo</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Helmet>

      <motion.h1 variants={fadeUp} initial="initial" animate="animate">{t('contact.title')}</motion.h1>
      <motion.p className="contact-subtitle text-muted" variants={fadeUp} initial="initial" animate="animate">
        {t('contact.subtitle')}
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="initial"
        animate="animate"
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">{t('contact.subject')}</label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-submit"
          disabled={status === 'loading'}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          {status === 'loading' ? t('contact.sending') : t('contact.send')}
        </button>

        {status === 'success' && (
          <motion.p
            className="form-feedback form-feedback--success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} /> {t('contact.success')}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="form-feedback form-feedback--error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FontAwesomeIcon icon={faExclamationCircle} /> {t('contact.error')}
          </motion.p>
        )}
      </motion.form>

      <motion.div
        className="contact-direct"
        variants={fadeUp}
        initial="initial"
        animate="animate"
      >
        <p className="text-muted">
          <FontAwesomeIcon icon={faEnvelope} /> pedroramostrovo@gmail.com
        </p>
      </motion.div>
    </section>
  )
}

export default Contato
