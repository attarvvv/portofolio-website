import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

// ─── SVG Logos ───────────────────────────────────────────────────
const NextjsLogo = () => (
  <svg width="20" height="20" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="currentColor"/>
    <path d="M149.508 157.52L69.141 54H54V125.97H66.8141V69.7563L138.57 162.428C142.443 161.026 146.108 159.38 149.508 157.52Z" fill="var(--bg-primary)"/>
    <rect x="115" y="54" width="13" height="72" fill="var(--bg-primary)"/>
  </svg>
)
const ReactLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="10" fill="#61DAFB"/>
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" fill="none"/>
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" fill="none" transform="rotate(60 50 50)"/>
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="4.5" fill="none" transform="rotate(120 50 50)"/>
  </svg>
)
const TypeScriptLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="20" fill="#3178C6"/>
    <path d="M30 38v10h12v32h12V48h12V38H30zm34 26c0-3.5 3-5.5 8-5.5 4.5 0 8 2 8 5.5s-3.5 5.5-8 5.5c-3 0-5.5.8-5.5 2.5s2.5 2.5 5.5 2.5c5.5 0 9.5-2 9.5-6h11c0 9.5-7.5 13-19.5 13C60 80 52 74 52 64c0-7 5.5-11.5 12-11.5 5.5 0 10 2.5 11 7h-11z" fill="#FFFFFF"/>
  </svg>
)
const JavaScriptLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="20" fill="#F7DF1E"/>
    <path d="M42 74c0-7.5-4-10-9-10-3.5 0-6.5 2-6.5 5.5s2.5 4.5 6.5 4.5c2 0 3.5.5 3.5 1.5s-1.5 1.5-3.5 1.5c-3.5 0-6-1.5-6-4H20c0 6.5 5 9.5 12.5 9.5 7.5 0 11.5-4.5 11.5-8.5zm31-1.5c0-7.5-4-10-9-10-3.5 0-6.5 2-6.5 5.5s2.5 4.5 6.5 4.5c2 0 3.5.5 3.5 1.5s-1.5 1.5-3.5 1.5c-3.5 0-6-1.5-6-4H51c0 6.5 5 9.5 12.5 9.5 7.5 0 11.5-4.5 11.5-8.5z" fill="#000000"/>
  </svg>
)
const TailwindLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <path d="M26 36c5-10 13-13 22-8 5 3 9 9 14 10 7 2 13-1 18-9-5 10-13 13-22 8-5-3-9-9-14-10-7-2-13 1-18 9zm-12 24c5-10 13-13 22-8 5 3 9 9 14 10 7 2 13-1 18-9-5 10-13 13-22 8-5-3-9-9-14-10-7-2-13 1-18 9z" fill="#06B6D4"/>
  </svg>
)
const ExpoLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <path d="M50 15L15 85h20l15-30 15 30h20L50 15z" fill="currentColor"/>
  </svg>
)
const NodeLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100">
    <path d="M50 10L15 30v40l35 20 35-20V30L50 10zm0 14l23 13v26L50 76 27 63V37l23-13z" fill="#339933"/>
  </svg>
)
const ExpressLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="currentColor" opacity="0.1"/>
    <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="36" fontWeight="bold" fontFamily="sans-serif">ex</text>
  </svg>
)
const SupabaseLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <path d="M56 10L18 58h28L40 90l38-48H50l6-32z" fill="#3ECF8E"/>
  </svg>
)
const MySQLLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#00618A" opacity="0.15"/>
    <path d="M30 70c10-25 25-35 40-25m-30 35c15-20 20-30 30-15" stroke="#00618A" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="65" cy="35" r="6" fill="#E48E00"/>
  </svg>
)
const PythonLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <path d="M48 10c-18 0-18 8-18 8v9h18v3H25s-10 0-10 15 9 15 9 15h5V50s0-9 9-9h16s8 0 8-8V20s0-10-14-10zm-6 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#3776AB"/>
    <path d="M52 90c18 0 18-8 18-8v-9H52v-3h23s10 0 10-15-9-15-9-15h-5v10s0 9-9 9H46s-8 0-8 8v13s0 10 14 10zm6-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#FFD43B"/>
  </svg>
)
const LuaLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="38" fill="#000080"/>
    <circle cx="68" cy="32" r="10" fill="#FFFFFF"/>
  </svg>
)
const PostmanLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="42" fill="#FF6C37"/>
    <path d="M30 55l16-16 12 12 16-20M46 39v16h16" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FigmaLogo = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
    <circle cx="35" cy="25" r="15" fill="#F24E1E"/>
    <circle cx="65" cy="25" r="15" fill="#FF7262"/>
    <circle cx="35" cy="55" r="15" fill="#A259FF"/>
    <circle cx="35" cy="80" r="15" fill="#0ACF83"/>
    <circle cx="65" cy="55" r="15" fill="#1ABCFE"/>
  </svg>
)
// ─────────────────────────────────────────────────────────────────

const TechStackBento = () => {
  const { t } = useLang()
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelector('.bento-header-row'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(
        gridRef.current?.children,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  const Tool = ({ Logo, name, level }) => (
    <div className="tool-badge-pill">
      <Logo />
      <div className="tool-info">
        <span className="tool-name">{name}</span>
        <span className="tool-level">{level}</span>
      </div>
    </div>
  )

  return (
    <section className="bento-section" id="techstack" ref={sectionRef}>
      <div className="bento-header-row">
        <h2 className="bento-title">{t('tech_title')}</h2>
        <p className="bento-subtitle-right">{t('tech_subtitle')}</p>
      </div>

      <div className="bento-grid-equal" ref={gridRef}>
        {/* Card 01 */}
        <div className="bento-card-equal">
          <div className="bento-card-top">
            <h3 className="bento-card-title-lg">{t('tech_card1_title')}</h3>
            <span className="bento-card-num">01</span>
          </div>
          <p className="bento-card-sub">{t('tech_card1_sub')}</p>
          <div className="bento-tools-wrap">
            <Tool Logo={NextjsLogo} name="Next.js" level="Advanced" />
            <Tool Logo={ReactLogo} name="React.js" level="Advanced" />
            <Tool Logo={TypeScriptLogo} name="TypeScript" level="Intermediate" />
            <Tool Logo={JavaScriptLogo} name="JavaScript" level="Advanced" />
            <Tool Logo={TailwindLogo} name="Tailwind CSS" level="Advanced" />
          </div>
        </div>

        {/* Card 02 */}
        <div className="bento-card-equal">
          <div className="bento-card-top">
            <h3 className="bento-card-title-lg">{t('tech_card2_title')}</h3>
            <span className="bento-card-num">02</span>
          </div>
          <p className="bento-card-sub">{t('tech_card2_sub')}</p>
          <div className="bento-tools-wrap">
            <Tool Logo={ReactLogo} name="React Native" level="Intermediate" />
            <Tool Logo={ExpoLogo} name="Expo" level="Intermediate" />
          </div>
        </div>

        {/* Card 03 */}
        <div className="bento-card-equal">
          <div className="bento-card-top">
            <h3 className="bento-card-title-lg">{t('tech_card3_title')}</h3>
            <span className="bento-card-num">03</span>
          </div>
          <p className="bento-card-sub">{t('tech_card3_sub')}</p>
          <div className="bento-tools-wrap">
            <Tool Logo={NodeLogo} name="Node.js" level="Intermediate" />
            <Tool Logo={ExpressLogo} name="Express.js" level="Intermediate" />
            <Tool Logo={SupabaseLogo} name="Supabase" level="Intermediate" />
            <Tool Logo={MySQLLogo} name="MySQL" level="Intermediate" />
            <Tool Logo={PythonLogo} name="Python" level="Basic" />
            <Tool Logo={LuaLogo} name="Lua" level="Basic" />
          </div>
        </div>

        {/* Card 04 */}
        <div className="bento-card-equal">
          <div className="bento-card-top">
            <h3 className="bento-card-title-lg">{t('tech_card4_title')}</h3>
            <span className="bento-card-num">04</span>
          </div>
          <p className="bento-card-sub">{t('tech_card4_sub')}</p>
          <div className="bento-tools-wrap">
            <Tool Logo={PostmanLogo} name="Postman" level="Advanced" />
            <Tool Logo={FigmaLogo} name="Figma" level="Advanced" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackBento
