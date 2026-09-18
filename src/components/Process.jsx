import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import './Process.css'

const steps = [
  {
    title: 'Reunião de diagnóstico',
    text: 'Conversamos com a diretoria e o síndico para entender a realidade e as prioridades do condomínio.',
  },
  {
    title: 'Proposta personalizada',
    text: 'Você recebe uma proposta gratuita, desenhada para o porte e as necessidades do seu empreendimento.',
  },
  {
    title: 'Implantação',
    text: 'Assumimos as rotinas financeira, operacional e documental com processos claros desde o primeiro dia.',
  },
  {
    title: 'Gestão contínua',
    text: 'Balancetes mensais, fiscalização e suporte permanente ao síndico, com prestação de contas transparente.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="section process">
      <div className="container">
        <SectionHead
          center
          title="Da primeira conversa à gestão em pleno funcionamento."
          description="Um caminho simples para o seu condomínio contar com a AGE."
        />

        <motion.ol
          className="process-steps"
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step, index) => (
            <motion.li key={step.title} className="process-step" variants={fadeUp}>
              <span className="process-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
