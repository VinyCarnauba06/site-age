import { BrandIcon } from './Icons'
import { company, navLinks, whatsappLink } from '../data/company'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo" aria-label="AGE – ir para o início">
              <img src="/logo.png" alt="AGE Gestão Empresarial" width="72" height="72" loading="lazy" />
            </a>
            <p>Administradora de condomínios em Maceió, Alagoas.</p>
          </div>

          <nav className="footer-col" aria-label="Rodapé">
            <h4>Navegação</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h4>Fale conosco</h4>
            <ul>
              <li>
                <a href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="footer-social">
                <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da AGE">
                  <BrandIcon name="instagram" size={18} />
                </a>
                <a
                  href={whatsappLink('Olá! Gostaria de falar com a AGE.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da AGE"
                >
                  <BrandIcon name="whatsapp" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {company.name}
          </p>
          <p>
            CNPJ {company.cnpj} · {company.registry}
          </p>
        </div>
      </div>
    </footer>
  )
}
