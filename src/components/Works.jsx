import { useEffect, useRef } from 'react'
import { Music, FileSpreadsheet, BookOpen, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const icons = [Music, FileSpreadsheet, BookOpen]
const tags = [
  ['Next.js', 'React.js', 'Supabase'],
  ['React.js', 'Express.js', 'Tailwind'],
  ['React.js', 'MySQL', 'Node.js'],
]

const Works = () => {
  const { t } = useLang()
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo(gridRef.current?.children, { y: 60, opacity: 0, scale: 0.94 }, {
        y: 0, opacity: 1, scale: 1, stagger: 0.18, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const projects = t('works')

  return (
    <section className="works-section" id="portfolio" ref={sectionRef}>
      <div>
        <div className="section-header" ref={headerRef}>
          <h2 className="section-title">
            {t('works_title_featured')} <span>{t('works_title_projects')}</span>
          </h2>
          <a href="https://github.com/attarvvv" target="_blank" rel="noopener noreferrer" className="view-all-link">
            {t('works_view_github')} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="works-grid" ref={gridRef}>
          {projects.map((project, i) => {
            const CardIcon = icons[i]
            return (
              <div className="work-card" key={i}>
                <div className="work-card-image-placeholder">
                  <CardIcon size={52} color="var(--accent-bright)" style={{ position: 'relative', zIndex: 1 }} />
                </div>
                <div className="work-card-body">
                  <div className="work-card-tags">
                    {tags[i].map((tag, j) => <span className="work-tag" key={j}>{tag}</span>)}
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
