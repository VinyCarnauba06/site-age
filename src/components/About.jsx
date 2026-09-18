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
          </div>

          <motion.div
            className="about-card credentials-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="credentials-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor"/>
              </svg>
            </div>
            <h4>Empresa Credenciada</h4>
            <p className="credentials-detail">Registrada no CRA-AL</p>
            <p className="credentials-cnpj">CNPJ: 13.085.902/0001-10</p>
          </motion.div>
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
