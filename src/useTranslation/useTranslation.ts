import { useContext } from 'react';
import { getObjectWithKey } from './helpers/common';
import { FormatType } from './models/Translation';
import { TranslationContext } from './translationContext';

export const useTranslation = (nameSpace?: string) => {
  const { lang: loadedLanguage, userLanguage, handleChangeUserLanguage } = useContext(
    TranslationContext
  );

  const t = (transKey: string, format?: FormatType) => {
    const languageKey = `${nameSpace ? nameSpace + '.' : ''}${transKey}`;

    return getObjectWithKey(loadedLanguage, languageKey, format) || languageKey;
  };

  const setLanguage = (nextLanguage: string) => handleChangeUserLanguage(nextLanguage);

  const getLanguage = (): string => userLanguage;

  return {
    t,
    setLanguage,
    getLanguage,
  };
};
