import { motion } from 'framer-motion'
import Icon from './Icons'
import SectionHead from './SectionHead'
import { services } from '../data/company'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import './Services.css'

export default function Services() {
  return (
    <section id="servicos" className="section section--tint services">
      <div className="container">
        <SectionHead
          center
          title="Departamentos focados em cada frente da administração."
          description="Equipes especializadas para garantir precisão técnica em tudo o que o seu condomínio precisa."
        />

        <motion.div
          className="services-grid"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => (
            <motion.article key={service.title} className="service-card" variants={fadeUp}>
              <span className="service-icon">
                <Icon name={service.icon} size={26} />
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
