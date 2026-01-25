'use client';

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

type Locale = 'en' | 'fr';

const translations = { en, fr };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Helper function to safely access nested properties
const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['en', 'fr'].includes(savedLocale)) {
      setLocale(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0] as Locale;
      setLocale(['en', 'fr'].includes(browserLang) ? browserLang : 'fr');
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
    }
  };

  useEffect(() => {
    if (isMounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, isMounted]);

  const t = useCallback((key: string): any => {
    const currentTranslations = translations[locale];
    const fallbackTranslations = translations['fr']; // Fallback to French
    
    let result = getNestedValue(currentTranslations, key);

    if (result === undefined) {
      result = getNestedValue(fallbackTranslations, key);
    }
    
    if (result === undefined) {
      console.warn(`Translation key '${key}' not found in '${locale}' or fallback 'fr'.`);
      return key;
    }
    
    return result;
  }, [locale]);

  if (!isMounted) {
    // Avoid rendering mismatch between server and client
    return null;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
