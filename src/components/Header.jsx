import { useState, useEffect } from 'react'
import Icon from './Icons'
import { navLinks } from '../data/company'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}${isMenuOpen ? ' menu-open' : ''}`}>
      <div className="container header-content">
        <a href="#inicio" className="logo-container" onClick={closeMenu} aria-label="AGE – ir para o início">
          <img src="/logo.png" alt="AGE Gestão Empresarial" width="64" height="64" />
        </a>

        <nav id="primary-nav" className="nav" aria-label="Principal">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contato" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Solicitar proposta
            <Icon name="arrow" size={16} className="icon-arrow" />
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
