import { createContext, useContext, useState } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en') // 'en' | 'id'

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'id' : 'en'))

  const t = (key) => translations[lang][key] ?? key

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, translations: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
