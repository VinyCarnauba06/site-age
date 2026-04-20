import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="hero-badge" variants={itemVariants}>
            Autoridade em Maceió
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Gestão Condominial de <i>Alta Performance</i>.
          </motion.h1>

          <motion.p variants={itemVariants}>
            Governança corporativa, auditoria financeira e segurança patrimonial. A AGE redefiniu o padrão de
            administração de condomínios em Alagoas.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
