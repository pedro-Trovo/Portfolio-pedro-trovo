import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faServer,
  faNetworkWired,
  faPlug,
  faCloud,
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n'

const iconMap = {
  server: faServer,
  'network-wired': faNetworkWired,
  plug: faPlug,
  cloud: faCloud,
}

function ServiceCard({ service, index }) {
  const { t } = useLanguage()

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="service-icon">
        <FontAwesomeIcon icon={iconMap[service.icon]} />
      </div>
      <h3 className="service-title">{t(service.titleKey)}</h3>
      <p className="service-desc">{t(service.descKey)}</p>
    </motion.div>
  )
}

export default ServiceCard
