import './App.css'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-fold sections for better initial load performance
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const TechStack = lazy(() => import('./components/TechStack'))
const Certificates = lazy(() => import('./components/Certificates'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

/** Minimal fallback while lazy sections load */
function SectionFallback() {
  return (
    <div className="section-padding content-container" aria-busy="true">
      <div className="h-64 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" role="status">
          <span className="sr-only">Loading…</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-page-bg text-primary font-body">
      {/* Skip-to-content for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="relative" id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <Projects />
          <TechStack />
          <Certificates />
          <CTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
