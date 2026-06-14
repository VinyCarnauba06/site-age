import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section id="sobre" className="about section-padding">
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-card location-card">
            <div className="pin-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Nossa Sede</h4>
            <p className="location-address">Ponta Verde, Maceió – AL</p>
            <span className="location-badge">Sede desde 2004</span>
          </div>

          <div className="about-card timeline-card">
            <h4>Nossa Trajetória</h4>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">2004</span>
                  <span className="timeline-desc">Fundação</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">2012</span>
                  <span className="timeline-desc">Expansão regional</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">2024</span>
                  <span className="timeline-desc">20 anos de tradição</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nossa sólida trajetória em gestão de patrimônios.</h2>
          <p>
            Muito além da contabilidade básica, a <strong>AGE – Aliança Gestão Empresarial</strong> entrega inteligência
            administrativa. Compreendemos que um condomínio moderno exige o mesmo rigor de gestão de uma grande corporação.
          </p>
          <p>
            Implementamos processos auditáveis, otimização de fluxo de caixa e um atendimento que não deixa o síndico
            desamparado em nenhuma decisão crítica.
          </p>

          <div className="highlight-card">
            <h4>Nosso Maior Diferencial</h4>
            <p>
              Somos a única administradora de Maceió a fornecer <strong>Fiscalização Exclusiva de Atuação Contínua (24 horas)</strong> para nossos clientes, garantindo a execução
              irretocável das normas e o bem-estar dos condôminos em tempo real.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
