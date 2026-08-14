import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'Next.js & React.js', percent: 92 },
  { name: 'React Native (Expo)', percent: 88 },
  { name: 'Express.js & Node.js', percent: 85 },
  { name: 'JavaScript & TypeScript', percent: 90 },
  { name: 'Tailwind CSS', percent: 95 },
  { name: 'Supabase & MySQL', percent: 84 },
  { name: 'UI/UX Design (Figma)', percent: 82 },
  { name: 'Postman (API Testing)', percent: 86 },
]

const stats = [
  { number: '89', label: 'RPL Test Score' },
  { number: '3+', label: 'Informatics Medals' },
  { number: '3+', label: 'Real Web Projects' },
]

const About = () => {
  const sectionRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Column Animation
      gsap.fromTo(
        leftColRef.current?.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      // Stat Cards Animation
      gsap.fromTo(
        leftColRef.current?.querySelectorAll('.stat-card'),
        { scale: 0.7, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: leftColRef.current?.querySelector('.about-stats'),
            start: 'top 85%',
          },
        }
      )

      // Skills Fill Bar Animation with GSAP
      const skillFills = rightColRef.current?.querySelectorAll('.skill-fill')
      skillFills?.forEach((fill) => {
        const targetWidth = fill.getAttribute('data-percent')
        gsap.fromTo(
          fill,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightColRef.current,
              start: 'top 80%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-grid">
        {/* Left Column */}
        <div ref={leftColRef}>
          <h2 className="about-title">
            Passionate Software<br />
            <span>Engineering</span> Student
          </h2>
          <p className="about-description">
            Siswa Software Engineering di SMK Taruna Bhakti dengan ketertarikan tinggi
            pada Web Development dan UI/UX Design. Terbiasa membangun aplikasi web &amp; mobile
            yang responsif dan modern menggunakan Next.js, React Native, Express.js, MySQL, dan Supabase.
          </p>
          <p className="about-description">
            Gold Medalist Informatics KOSINUS 2024 &amp; Silver Medalist K2SN 2024 dengan
            nilai RPL Competency Test 89. Selalu beradaptasi dengan teknologi baru dan berfokus menciptakan
            pengalaman digital yang user-friendly.
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
        <div ref={rightColRef}>
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
                    data-percent={skill.percent}
                    style={{ width: '0%' }}
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
