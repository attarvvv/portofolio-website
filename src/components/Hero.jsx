import { useState, useEffect, useRef } from 'react'
import { User, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'

const services = [
  'Full Stack Web Development',
  'Next.js & React Development',
  'Mobile Apps (React Native Expo)',
  'Backend & API (Express.js / Node.js)',
  'UI/UX Design (Figma)',
]

const Hero = () => {
  const [activeService, setActiveService] = useState(0)

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const leftRef = useRef(null)
  const photoRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entry animations
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })

      tl.fromTo(
        [firstNameRef.current, lastNameRef.current],
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.18, delay: 0.1 }
      )
      .fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        photoRef.current,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'back.out(1.4)' },
        '-=1'
      )
      .fromTo(
        rightRef.current?.querySelectorAll('.service-item'),
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        '-=0.8'
      )

      // Continuous gentle float animation for photo
      gsap.to(photoRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Big Name */}
        <div className="hero-name-wrap">
          <h1 className="hero-name">
            <span className="hero-name-first" ref={firstNameRef}>MUHAMMAD</span>
            <span className="hero-name-last" ref={lastNameRef}>ATTAR</span>
          </h1>
        </div>

        {/* Body: Left | Photo | Right */}
        <div className="hero-body">
          {/* Left */}
          <div className="hero-left" ref={leftRef}>
            <p className="hero-description">
              Software Engineering student at <strong>SMK Taruna Bhakti</strong> &amp;{' '}
              <strong>Full Stack Developer</strong> specializing in Next.js, React Native, Express.js, &amp; Supabase.
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
          <div className="hero-photo-wrap" ref={photoRef}>
            <div className="hero-photo-glow" />
            {/* Photo placeholder - ganti dengan foto Anda */}
            <div className="hero-photo-placeholder">
              <div className="photo-placeholder-icon">
                <User size={36} color="var(--accent-bright)" />
              </div>
            </div>
          </div>

          {/* Right - Services */}
          <div className="hero-right" id="services" ref={rightRef}>
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
