import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certificates from './components/Certificates'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-page-bg text-primary font-body">
      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Certificates />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
