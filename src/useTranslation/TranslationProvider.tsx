import React, { useState } from 'react';
import { defaultLanguage, lang, langOptions } from '../Localize/Translation/lang';
import { TranslationProps } from './models/Translation';
import { TranslationContext } from './translationContext';

export const TranslationProvider = ({ children }: TranslationProps) => {
  const [userLanguage, setUserLanguage] = useState(defaultLanguage);

  const provider = {
    userLanguage,
    lang: lang[userLanguage],
    handleChangeUserLanguage: (selectedLanguage: string) => {
      const newLanguage = langOptions[selectedLanguage] ? selectedLanguage : defaultLanguage;
      setUserLanguage(newLanguage);
      window.localStorage.setItem('dv-language', newLanguage);
    },
  };

  return <TranslationContext.Provider value={provider}>{children}</TranslationContext.Provider>;
};
