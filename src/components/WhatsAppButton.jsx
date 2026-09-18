import { useState, useEffect } from 'react'
import { BrandIcon } from './Icons'
import { whatsappLink } from '../data/company'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`wa-fab${visible ? ' visible' : ''}`}
      href={whatsappLink('Olá! Gostaria de falar com a AGE.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a AGE pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <BrandIcon name="whatsapp" size={28} />
      <span className="wa-fab-label">Fale conosco</span>
    </a>
  )
}
