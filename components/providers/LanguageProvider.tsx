"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "th" | "en";
export type LocalizedText = Record<Language, string>;

const STORAGE_KEY = "nowheredev-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    let next: Language = "en";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "th" || stored === "en") {
        next = stored;
      } else if (navigator.language.toLowerCase().startsWith("th")) {
        next = "th";
      }
    } catch {
      if (navigator.language.toLowerCase().startsWith("th")) next = "th";
    }

    setLanguageState(next);
    document.documentElement.lang = next;
  }, []);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in strict privacy modes.
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "th" ? "en" : "th");
  }, [language, setLanguage]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function localize(text: LocalizedText, language: Language) {
  return text[language];
}
