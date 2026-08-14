import { useEffect, useRef, useState } from 'react'
import {
  Zap,
  ShoppingCart,
  BarChart3,
  Palette,
  Lock,
  Smartphone,
  ArrowUpRight
} from 'lucide-react'

const projects = [
  {
    Icon: Zap,
    tags: ['React Native', 'Node.js'],
    title: 'ThunderBolt Garage App',
    desc: 'Aplikasi mobile untuk manajemen bengkel otomotif dengan fitur booking, tracking order, dan manajemen pelanggan.',
  },
  {
    Icon: ShoppingCart,
    tags: ['Next.js', 'PostgreSQL'],
    title: 'E-Commerce Platform',
    desc: 'Platform e-commerce modern dengan fitur payment gateway, real-time inventory, dan analytics dashboard.',
  },
  {
    Icon: BarChart3,
    tags: ['React', 'Laravel'],
    title: 'HR Management System',
    desc: 'Sistem manajemen SDM dengan fitur absensi, penggajian otomatis, dan laporan kinerja karyawan.',
  },
  {
    Icon: Palette,
    tags: ['Figma', 'UI/UX'],
    title: 'Design System',
    desc: 'Comprehensive design system dengan komponen yang reusable, dokumentasi, dan design tokens.',
  },
  {
    Icon: Lock,
    tags: ['Node.js', 'MongoDB'],
    title: 'Auth Microservice',
    desc: 'Microservice autentikasi dengan JWT, OAuth2, 2FA, dan rate limiting untuk keamanan maksimal.',
  },
  {
    Icon: Smartphone,
    tags: ['React Native', 'Expo'],
    title: 'Fitness Tracker App',
    desc: 'Aplikasi mobile fitness dengan tracking workout, diet planning, dan progress visualization.',
  },
]

const Works = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="works-section" id="portfolio" ref={sectionRef}>
      <div className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <div>
            <h2 className="section-title">
              Featured <span>Works</span>
            </h2>
          </div>
          <a href="#" className="view-all-link">
            View All Projects <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="works-grid">
          {projects.map((project, i) => {
            const CardIcon = project.Icon
            return (
              <div
                className="work-card"
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="work-card-image-placeholder">
                  <CardIcon size={48} color="var(--accent-bright)" style={{ position: 'relative', zIndex: 1 }} />
                </div>
                <div className="work-card-body">
                  <div className="work-card-tags">
                    {project.tags.map((tag, j) => (
                      <span className="work-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="work-card-title">{project.title}</h3>
                  <p className="work-card-desc">{project.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Works
