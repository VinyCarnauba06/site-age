import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const locationIcon = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
  const phoneIcon = 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'

  return (
    <section id="contato" className="contact-section section-padding">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title" style={{ marginBottom: '40px' }}>
            Agende uma reunião com nossos diretores.
          </h2>

          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <svg viewBox="0 0 24 24">
              <path d={locationIcon} />
            </svg>
            <div>
              <h4>Sede Administrativa</h4>
              <p>
                R. Dr. Antônio Cansanção, 439<br />
                Ponta Verde, Maceió - AL<br />
                CEP: 57035-190
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <svg viewBox="0 0 24 24">
              <path d={phoneIcon} />
            </svg>
            <div>
              <h4>Atendimento</h4>
              <p>
                +55 82 99995-5841<br />
                Segunda a sexta: 07h30 às 18h00
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ marginTop: '40px' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/5582999955841"
              className="btn-portal btn-contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
