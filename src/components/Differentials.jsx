import { motion } from 'framer-motion'
import Icon from './Icons'
import SectionHead from './SectionHead'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import './Differentials.css'

const supporting = [
  {
    icon: 'clipboard',
    title: 'Processos auditáveis',
    text: 'Rotinas documentadas e rastreáveis: cada decisão e cada lançamento podem ser conferidos pela diretoria do condomínio.',
  },
  {
    icon: 'lifebuoy',
    title: 'Suporte total ao síndico',
    text: 'Um time técnico ao seu lado em decisões críticas, de contratos e obras a assembleias e cobranças.',
  },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="section section--dark differentials">
      <div className="container">
        <SectionHead light title="Rigor de grande empresa aplicado ao seu condomínio." />

        <motion.div
          className="diff-grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.article className="diff-feature" variants={fadeUp}>
            <h3>Fiscalização exclusiva, 24 horas por dia</h3>
            <p>
              Somos a única administradora de Maceió a oferecer fiscalização contínua, garantindo a execução das
              normas e o bem-estar dos condôminos em tempo real.
            </p>
            <a href="#contato" className="diff-feature-link">
              Quero esse diferencial
              <Icon name="arrow" size={16} className="icon-arrow" />
            </a>
          </motion.article>

          {supporting.map((item) => (
            <motion.article key={item.title} className="diff-card" variants={fadeUp}>
              <span className="diff-card-icon">
                <Icon name={item.icon} size={24} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
