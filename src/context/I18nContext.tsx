import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../lang/en.json';
import ru from '../lang/ru.json';
import cs from '../lang/cs.json';
import ua from '../lang/ua.json';

type Language = 'en' | 'ru' | 'cs' | 'ua';

const translations = {
  en,
  ru,
  cs,
  ua
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('cs');

  useEffect(() => {
    // Detect browser language or load from localStorage
    const savedLang = localStorage.getItem('appLang') as Language;
    if (savedLang && translations[savedLang]) {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (translations[browserLang]) {
        setLangState(browserLang);
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('appLang', newLang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[lang];
    for (const key of keys) {
      if (result && typeof result === 'object') {
        result = result[key];
      } else {
        return path; // Fallback to key if not found
      }
    }
    return result || path;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
