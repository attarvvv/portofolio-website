import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'React / React Native', percent: 92 },
  { name: 'Node.js / Express', percent: 85 },
  { name: 'TypeScript', percent: 80 },
  { name: 'UI/UX Design (Figma)', percent: 78 },
  { name: 'PostgreSQL / MySQL', percent: 82 },
  { name: 'Laravel / PHP', percent: 75 },
]

const stats = [
  { number: '20+', label: 'Projects Done' },
  { number: '3+', label: 'Years Experience' },
  { number: '10+', label: 'Happy Clients' },
]

const About = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setSkillsAnimated(true), 300)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className={`about-grid reveal ${visible ? 'visible' : ''}`}>
        {/* Left Column */}
        <div>
          <h2 className="about-title">
            Building Digital<br />
            <span>Experiences</span> That Matter
          </h2>
          <p className="about-description">
            Saya seorang Full Stack Developer yang passionate dalam membangun
            aplikasi web dan mobile yang scalable, performant, dan user-friendly.
            Saya percaya bahwa kode yang baik adalah kode yang bisa dibaca,
            dimaintain, dan terus berkembang.
          </p>
          <p className="about-description">
            Dengan pengalaman di berbagai stack teknologi dari React dan Node.js
            hingga Laravel dan React Native. saya siap membantu mewujudkan
            ide Anda menjadi produk digital yang nyata.
          </p>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills */}
        <div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-row" key={i}>
                <div className="skill-label-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: skillsAnimated ? `${skill.percent}%` : '0%',
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
