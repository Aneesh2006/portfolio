import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="min-h-screen bg-page-bg text-primary font-body">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        {/* Certificates */}
        {/* CTA */}
      </main>
      {/* Footer */}
    </div>
  )
}

export default App
