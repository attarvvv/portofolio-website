import { useState } from 'react'
import { User, ArrowRight } from 'lucide-react'

const services = [
  'Full Stack Development',
  'Mobile Development',
  'UI/UX Design',
  'API Integration',
  'Database Design',
]

const Hero = () => {
  const [activeService, setActiveService] = useState(1)

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Big Name */}
        <div className="hero-name-wrap">
          <h1 className="hero-name">
            <span className="hero-name-first">MUHAMMAD</span>
            <span className="hero-name-last">ATTAR</span>
          </h1>
        </div>

        {/* Body: Left | Photo | Right */}
        <div className="hero-body">
          {/* Left */}
          <div className="hero-left">
            <p className="hero-description">
              Hey there! I'm a <strong>Full Stack Developer</strong> &amp;{' '}
              <strong>UI/UX Designer</strong> crafting elegant digital experiences
              for the modern web.
            </p>
            <a
              href="#contact"
              className="hire-btn"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="hire-btn-prefix">//</span>
              <span>HIRE ME</span>
              <ArrowRight size={16} className="hire-btn-arrow" />
            </a>
          </div>

          {/* Center - Photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-glow" />
            {/* Photo placeholder - ganti dengan foto Anda */}
            <div className="hero-photo-placeholder">
              <div className="photo-placeholder-icon">
                <User size={36} color="var(--accent-bright)" />
              </div>
              <p className="photo-placeholder-text">
                Tempatkan foto Anda di sini
                <br />
                <code style={{ fontSize: '0.7rem', opacity: 0.6 }}>src/assets/photo.png</code>
              </p>
            </div>
          </div>

          {/* Right - Services */}
          <div className="hero-right" id="services">
            <ul className="services-list">
              {services.map((s, i) => (
                <li
                  key={i}
                  className={`service-item ${activeService === i ? 'active' : ''}`}
                  onMouseEnter={() => setActiveService(i)}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
