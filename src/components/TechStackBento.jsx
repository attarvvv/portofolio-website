import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../context/LanguageContext'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMysql,
  SiPython,
  SiLua,
  SiPostman,
  SiFigma,
} from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

// ─── Icon Wrappers (official brand colors) ───────────────────────
const NextjsLogo = () => <SiNextdotjs size={20} color="currentColor" />
const ReactLogo = () => <SiReact size={20} color="#61DAFB" />
const TypeScriptLogo = () => <SiTypescript size={20} color="#3178C6" />
const JavaScriptLogo = () => <SiJavascript size={20} color="#F7DF1E" />
const TailwindLogo = () => <SiTailwindcss size={20} color="#06B6D4" />
const ExpoLogo = () => <SiExpo size={20} color="currentColor" />
const NodeLogo = () => <SiNodedotjs size={20} color="#339933" />
const ExpressLogo = () => <SiExpress size={20} color="currentColor" />
const SupabaseLogo = () => <SiSupabase size={20} color="#3ECF8E" />
const MySQLLogo = () => <SiMysql size={20} color="#4479A1" />
const PythonLogo = () => <SiPython size={20} color="#3776AB" />
const LuaLogo = () => <SiLua size={20} color="#000080" />
const PostmanLogo = () => <SiPostman size={20} color="#FF6C37" />
const FigmaLogo = () => <SiFigma size={20} color="#F24E1E" />
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
