import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar" style={{
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.25)' : 'none'
    }}>
      {/* Logo */}
      <a href="#" className="navbar-logo">
        ATTAR
      </a>

      {/* Nav links */}
      <ul className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>{t('nav_services')}</a></li>
        <li><a href="#portfolio" onClick={e => { e.preventDefault(); scrollTo('portfolio') }}>{t('nav_portfolio')}</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>{t('nav_contact')}</a></li>
      </ul>

      {/* Right side */}
      <div className="navbar-right">
        {/* Language Toggle */}
        <button
          className="lang-toggle"
          onClick={toggleLang}
          aria-label="Toggle language"
          title={lang === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
        >
          <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
          <span className="lang-divider">|</span>
          <span className={lang === 'id' ? 'lang-active' : 'lang-inactive'}>ID</span>
        </button>

        {/* Theme Toggle */}
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

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} color={theme === 'light' ? '#04150e' : '#ffffff'} /> : <Menu size={24} color={theme === 'light' ? '#04150e' : '#ffffff'} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
