/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useMemo } from "react";

type Lang = "en-US" | "fr-FR" | "es-ES";
type UiLang = "en" | "fr" | "es";

type LanguageContextValue = {
  language: Lang; // local string to use for TMDB API calls
  setLanguage: (language: Lang) => void; // code string to use for UI translations
  uiLang: UiLang; // update the current language
};

//  this will convert full locale to short UI code
const toUiLang = (language: Lang): UiLang =>
  language.startsWith("fr") ? "fr" : language.startsWith("es") ? "es" : "en";

// default context
const LanguageContext = createContext<LanguageContextValue>({
  language: "en-US",
  uiLang: "en",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Lang>(
    (localStorage.getItem("language") as Lang) || "en-US"
  );
  // refresh uiLang when Languages will change
  const value = useMemo<LanguageContextValue>(() => {
    const uiLang = toUiLang(language);
    return {
      language,
      uiLang,
      setLanguage: (language: Lang) => {
        // renamed argument
        localStorage.setItem("lang", language);
        setLanguage(language);
      },
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); // custom hooks to access content
