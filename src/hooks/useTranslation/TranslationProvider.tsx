import React, { ReactNode, useContext, useState } from 'react';
import { getObjectWithKey } from '../../helpers/common';
import { defaultLanguage, lang, langOptions } from '../../Localize/Translation/lang';
import { TranslationContext } from './translationContext';

type TranslationProps = {
  children: ReactNode;
};

type TransProps = {
  t: string;
};

export const TranslationProvider = ({ children }: TranslationProps) => {
  const [userLanguage, setUserLanguage] = useState(defaultLanguage);

  const provider = {
    userLanguage,
    lang: lang[userLanguage],
    handleChangeUserLanguage: (selectedLanguage: string) => {
      const newLanguage = langOptions[selectedLanguage] ? selectedLanguage : defaultLanguage;
      setUserLanguage(newLanguage);
      window.localStorage.setItem('pdh-language', newLanguage);
    },
  };

  return <TranslationContext.Provider value={provider}>{children}</TranslationContext.Provider>;
};

export const useTranslation = (nameSpace?: string) => {
  const { lang: loadedLanguage } = useContext(TranslationContext);

  return (transKey: string) => {
    const languageKey = `${nameSpace ? nameSpace + '.' : ''}${transKey}`;

    return getObjectWithKey(loadedLanguage, languageKey) || languageKey;
  };
};

export const Trans = ({ t: transKey }: TransProps) => {
  const { lang: loadedLanguage } = useContext(TranslationContext);

  return getObjectWithKey(loadedLanguage, transKey) || transKey;
};
