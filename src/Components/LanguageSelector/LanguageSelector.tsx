import React, { useContext, useEffect } from 'react';
import { TranslationContext } from '../../hooks/useTranslation/translationContext';
import { defaultLanguage, langOptions } from '../../Localize/Translation/lang';

export const LanguageSelector = () => {
  const { userLanguage = defaultLanguage, handleChangeUserLanguage } = useContext(
    TranslationContext
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    handleChangeUserLanguage(e.target.value);

  useEffect(() => {
    let defaultLang = window.localStorage.getItem('pdh-language');
    if (!defaultLang) defaultLang = window.navigator.language.substring(0, 2);

    handleChangeUserLanguage(defaultLang);
  }, [handleChangeUserLanguage]);

  return (
    <select
      name="languageSelector"
      id="languageSelector"
      onChange={handleSelectChange}
      value={userLanguage}
    >
      {Object.keys(langOptions).map((langOptionKey, index) => (
        <option key={index} value={langOptionKey}>
          {langOptions[langOptionKey]}
        </option>
      ))}
    </select>
  );
};
