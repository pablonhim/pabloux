import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'km' | 'en'

const STORAGE_KEY = 'pablo-ux-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'km'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'km' || stored === 'en') return stored
  } catch {
    // localStorage unavailable (private mode, etc.) — fall through to default.
  }
  return 'km'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Ignore write failures — language just won't persist across visits.
    }
  }, [language])

  function setLanguage(next: Language) {
    setLanguageState(next)
  }

  function toggleLanguage() {
    setLanguageState((current) => (current === 'km' ? 'en' : 'km'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Picks the current-language value out of a { en, km } bilingual field. */
export function usePick(): <T>(field: { en: T; km: T }) => T {
  const { language } = useLanguage()
  return (field) => field[language]
}
