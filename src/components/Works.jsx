import { useEffect, useRef } from 'react'
import {
  Music,
  FileSpreadsheet,
  BookOpen,
  ArrowUpRight,
  Globe
} from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    Icon: Music,
    tags: ['Next.js', 'React.js', 'Supabase'],
    title: 'Wavely — Music Streaming Web',
    desc: 'Aplikasi streaming musik modern yang memungkinkan pengguna menjelajahi & memutar lagu dengan antarmuka intuitif. Terintegrasi dengan Supabase untuk autentikasi & real-time data.',
    github: 'https://github.com/attarvvv',
  },
  {
    Icon: FileSpreadsheet,
    tags: ['React.js', 'Express.js', 'Tailwind'],
    title: 'CITIZENCARE ID',
    desc: 'Platform pelaporan warga berbasis web yang memungkinkan masyarakat mengajukan & mengelola pengaduan publik secara efisien dengan responsif UI.',
    github: 'https://github.com/attarvvv',
  },
  {
    Icon: BookOpen,
    tags: ['React.js', 'MySQL', 'Node.js'],
    title: 'PHORIUM LIBRARY',
    desc: 'Aplikasi manajemen perpustakaan web untuk merampingkan operasional perpustakaan, peminjaman buku, inventaris, dan pencatatan data secara efisien.',
    github: 'https://github.com/attarvvv',
  },
]

const Works = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )

      // Project Cards Stagger Animation
      gsap.fromTo(
        gridRef.current?.children,
        { y: 60, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.18,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="works-section" id="portfolio" ref={sectionRef}>
      <div>
        <div className="section-header" ref={headerRef}>
          <div>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/attarvvv"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            View GitHub Profile <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="works-grid" ref={gridRef}>
          {projects.map((project, i) => {
            const CardIcon = project.Icon
            return (
              <div
                className="work-card"
                key={i}
              >
                <div className="work-card-image-placeholder">
                  <CardIcon size={52} color="var(--accent-bright)" style={{ position: 'relative', zIndex: 1 }} />
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
