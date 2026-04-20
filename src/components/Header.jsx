import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Estrutura', href: '#setores' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#inicio" className="logo-container">
          <img src="/logo.jpeg" alt="AGE Gestão Empresarial" />
        </a>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="btn-portal">
                Área do Cliente
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
