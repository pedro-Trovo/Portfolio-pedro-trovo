import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../i18n'

function Counter({ from, to, duration = 1.5 }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isInView) return
    let startTime
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (to - from) + from))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, from, to, duration])

  return <span ref={ref}>{count}</span>
}

const metricsData = [
  { key: 'metrics.projects', from: 0, to: 2, suffix: '+' },
  { key: 'metrics.months', from: 0, to: 11, suffix: '+' },
  { key: 'metrics.techs', from: 0, to: 6, suffix: '+' },
  { key: 'metrics.clients', from: 0, to: 1, suffix: '+' },
]

function Metrics() {
  const { t } = useLanguage()

  return (
    <section className="metrics-section">
      <div className="metrics-grid">
        {metricsData.map((m) => (
          <motion.div
            key={m.key}
            className="metric-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="metric-value">
              <Counter from={m.from} to={m.to} />{m.suffix}
            </span>
            <span className="metric-label">{t(m.key)}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Metrics
