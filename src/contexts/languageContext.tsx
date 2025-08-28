import React, { createContext, useContext, useState, useMemo } from "react";

type Lang = "en-US" | "fr-FR" | "es-ES";
type LanguageContextValue = { language: Lang; setLanguage: (l: Lang) => void };

const LanguageContext = createContext<LanguageContextValue>({
  language: "en-US",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en-US"
  );
  const value = useMemo(
    () => ({
      language,
      setLanguage: (l: Lang) => {
        localStorage.setItem("lang", l);
        setLanguage(l);
      },
    }),
    [language]
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext); // custom hooks
