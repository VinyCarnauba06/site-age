import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}