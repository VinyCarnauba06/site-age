import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>
          &copy; {currentYear} AGE – Aliança Gestão Empresarial. Todos os direitos reservados. Design e Desenvolvimento
          de Alta Performance.
        </p>
      </div>
    </footer>
  )
}
