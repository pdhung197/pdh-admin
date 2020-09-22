import { createContext } from 'react';
import { defaultLanguage, lang } from '../../Localize/Translation/lang';

export const TranslationContext = createContext({
  userLanguage: defaultLanguage,
  lang: lang[defaultLanguage],
  handleChangeUserLanguage: (selectedLanguage: string) => {
    console.log({ selectedLanguage });
  },
});
