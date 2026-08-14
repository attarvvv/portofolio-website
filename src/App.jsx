import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark') // 'dark' | 'light'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app" data-theme={theme === 'light' ? 'light' : undefined}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Marquee />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
