import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import './About.css'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <motion.div
        className="container about-grid"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 variants={fadeUp}>Uma trajetória sólida em gestão de patrimônios.</motion.h2>

        <div className="about-text">
          <motion.p className="about-lead" variants={fadeUp}>
            Muito além da contabilidade básica, a <strong>AGE – Aliança Gestão Empresarial</strong> entrega
            inteligência administrativa. Um condomínio moderno exige o mesmo rigor de gestão de uma grande
            corporação.
          </motion.p>
          <motion.p variants={fadeUp}>
            Nosso trabalho é simples de descrever e exigente de cumprir: processos claros, contas abertas e um
            atendimento que não deixa o síndico sozinho em nenhuma decisão importante.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
