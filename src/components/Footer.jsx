import { useLang } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="footer-logo">
        MUHAMMAD ATTAR
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} Attar. {t('footer_copy')}
      </div>
    </footer>
  )
}

export default Footer
