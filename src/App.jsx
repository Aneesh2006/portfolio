import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-fold sections for better initial load performance
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const TechStack = lazy(() => import('./components/TechStack'))
const Certificates = lazy(() => import('./components/Certificates'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))
const Contact = lazy(() => import('./components/Contact'))

/** Scroll to hash anchor when location changes */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to allow lazy components to render
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

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

/** Home page — all portfolio sections */
function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Experience />
        <Projects />
        <TechStack />
        <Certificates />
        <CTA />
      </Suspense>
    </>
  )
}

/** Contact page */
function ContactPage() {
  return (
    <Suspense fallback={<SectionFallback />}>
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
      <Contact />
    </Suspense>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-page-bg text-primary font-body">
      <ScrollToHash />
      {/* Skip-to-content for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#222222] dark:focus:bg-white focus:text-white dark:focus:text-[#222222] focus:rounded-md focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="relative" id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
