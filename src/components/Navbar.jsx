import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar" style={{
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none'
    }}>
      {/* Logo tanpa bintang */}
      <a href="#" className="navbar-logo">
        ATTAR
      </a>

      {/* Nav links */}
      <ul className="navbar-nav">
        <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
        <li><a href="#portfolio" onClick={e => { e.preventDefault(); scrollTo('portfolio') }}>Portfolio</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
      </ul>

      {/* Right side - hanya Theme Toggle Switch */}
      <div className="navbar-right">
        <button
          className={`theme-toggle ${theme === 'light' ? 'light' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <div className="theme-toggle-thumb">
            {theme === 'dark' ? (
              <Moon size={12} color="#ffffff" />
            ) : (
              <Sun size={12} color="#04150e" />
            )}
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
