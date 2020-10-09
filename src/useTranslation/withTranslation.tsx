import React, { ComponentClass, FunctionComponent, useState } from 'react';
import { defaultLanguage, lang, langOptions } from '../Localize/Translation/lang';
import { TranslationContext } from './translationContext';

export const withTranslation = (RederingComponent: FunctionComponent | ComponentClass<any>) => (
  props: any
) => {
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

  return (
    <TranslationContext.Provider value={provider}>
      <RederingComponent {...props} />
    </TranslationContext.Provider>
  );
};
