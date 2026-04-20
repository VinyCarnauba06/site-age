import { motion } from 'framer-motion'
import './TrustBar.css'

export default function TrustBar() {
  const stats = [
    { number: '20', text: 'Anos de\nExperiência' },
    { number: '24h', text: 'Fiscalização\nIninterrupta' },
    { number: '100%', text: 'Transparência\nFinanceira' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="trust-bar">
      <div className="container">
        <motion.div
          className="trust-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} className="trust-item" variants={itemVariants}>
              <span className="trust-number">{stat.number}</span>
              <span className="trust-text">{stat.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
