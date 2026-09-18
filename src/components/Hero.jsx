import { motion } from 'framer-motion'
import Icon from './Icons'
import { fadeUp, stagger } from '../lib/motion'
import './Hero.css'

const stats = [
  { value: '20+', label: 'Anos administrando condomínios em Maceió' },
  { value: '24h', label: 'Fiscalização contínua' },
  { value: '100%', label: 'Digital e transparente' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <motion.div className="hero-text" variants={stagger(0.12, 0.05)} initial="hidden" animate="visible">
          <motion.h1 variants={fadeUp}>
            Gestão condominial de <em>alta performance</em>.
          </motion.h1>

          <motion.p className="hero-lead" variants={fadeUp}>
            Governança, auditoria financeira e segurança patrimonial para síndicos e condôminos que exigem
            transparência.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <a href="#contato" className="btn btn-primary btn-lg">
              Solicitar proposta gratuita
              <Icon name="arrow" size={18} className="icon-arrow" />
            </a>
            <a href="#servicos" className="btn btn-outline-light btn-lg">
              Conheça os serviços
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          className="hero-stats"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.value} className="hero-stat">
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
