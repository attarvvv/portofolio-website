import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStackBento from './components/TechStackBento'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '')
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <LanguageProvider>
      <div className="app" data-theme={theme === 'light' ? 'light' : undefined}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <TechStackBento />
        <Works />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
