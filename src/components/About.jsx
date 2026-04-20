import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section id="sobre" className="about section-padding">
      <div className="container about-grid">
        <motion.div
          className="about-images"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
            alt="Fachada de edifício moderno"
            className="img-main"
          />
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