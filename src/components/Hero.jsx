import { motion } from 'framer-motion'
import './Hero.css'

const stats = [
  { value: '98%', label: 'Adimplência' },
  { value: '20+', label: 'Anos de mercado' },
  { value: '24h', label: 'Fiscalização' },
]

const pillars = [
  'Gestão Financeira e Balancetes',
  'Emissão de Boletos e Cobrança',
  'Departamento Operacional',
  'Organização de Assembleias',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contato" className="btn-primary">Falar com um especialista</a>
            <a href="#setores" className="btn-ghost">Nossos serviços</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-dashboard"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="dashboard-card">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span /><span /><span />
              </div>
              <span className="dashboard-title">AGE – Painel de Desempenho</span>
            </div>

            <div className="dashboard-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="dash-stat"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.12 }}
                >
                  <span className="dash-stat-value">{stat.value}</span>
                  <span className="dash-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="dashboard-separator" />

            <ul className="dashboard-pillars">
              {pillars.map((pillar, i) => (
                <motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 + i * 0.1 }}
                >
                  <svg className="pillar-check" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="10" fill="rgba(74,139,186,0.18)" />
                    <path
                      d="M6 10l2.5 2.5L14 7"
                      stroke="#4A8BBA"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  {pillar}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
