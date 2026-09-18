import { useState } from 'react'
import { motion } from 'framer-motion'
import Icon, { BrandIcon } from './Icons'
import SectionHead from './SectionHead'
import { company, mapsEmbedUrl, mapsLinkUrl, whatsappLink } from '../data/company'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'
import './Contact.css'

const contactItems = [
  {
    icon: 'pin',
    label: 'Sede administrativa',
    lines: [company.address.street, `${company.address.district}, ${company.address.city} – ${company.address.state}`, `CEP ${company.address.zip}`],
  },
  {
    icon: 'phone',
    label: 'Telefone e WhatsApp',
    lines: [company.phoneDisplay],
    href: `tel:${company.phoneTel}`,
  },
  {
    icon: 'mail',
    label: 'E-mail',
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
  {
    icon: 'clock',
    label: 'Horário de atendimento',
    lines: [company.hours],
  },
]

const clean = (value) => value.replace(/\s+/g, ' ').trim()

export default function Contact() {
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = clean(String(data.get('name') || ''))
    const condo = clean(String(data.get('condo') || ''))
    const phone = clean(String(data.get('phone') || ''))
    const message = String(data.get('message') || '').trim()

    if (name.length < 2) return setError('Informe seu nome.')
    if (phone.replace(/\D/g, '').length < 10) return setError('Informe um telefone com DDD.')
    setError('')

    const text = [
      `Olá! Meu nome é ${name}${condo ? `, do condomínio ${condo}` : ''}. Gostaria de solicitar uma proposta.`,
      `Telefone para contato: ${phone}`,
      message && `\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="section section--dark contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <SectionHead
              light
              title="Agende uma reunião com nossos diretores."
              description="Nossos diretores atendem pessoalmente cada consulta. Conte a realidade do seu condomínio e receba uma proposta gratuita."
            />

            <motion.ul
              className="contact-list"
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {contactItems.map((item) => (
                <motion.li key={item.label} className="contact-item" variants={fadeUp}>
                  <span className="contact-icon">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <h3>{item.label}</h3>
                    {item.lines.map((line) =>
                      item.href ? (
                        <a key={line} href={item.href}>
                          {line}
                        </a>
                      ) : (
                        <p key={line}>{line}</p>
                      ),
                    )}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>Solicite sua proposta gratuita</h3>
            <p className="contact-form-sub">Respondemos em até 2 horas úteis, direto pelo WhatsApp.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="c-name">Seu nome *</label>
                <input id="c-name" name="name" type="text" autoComplete="name" maxLength={80} required />
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="c-condo">Condomínio</label>
                  <input id="c-condo" name="condo" type="text" maxLength={100} />
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Telefone (com DDD) *</label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                    placeholder="(82) 90000-0000"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="c-message">Como podemos ajudar?</label>
                <textarea id="c-message" name="message" rows={3} maxLength={500} />
              </div>

              <p className="form-error" role="alert">
                {error}
              </p>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                <BrandIcon name="whatsapp" size={18} />
                Enviar pelo WhatsApp
              </button>
              <p className="form-note">Você será direcionado ao WhatsApp da AGE com a mensagem pronta.</p>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-map"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <iframe
            title="Localização da AGE no Google Maps"
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="contact-map-link">
            <Icon name="pin" size={16} />
            Abrir no Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
