import React, { useEffect } from 'react';
import { langOptions } from '../../Localize/Translation/lang';
import { useTranslation } from '../../useTranslation';

export const LanguageSelector = () => {
  const { getLanguage, setLanguage } = useTranslation();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setLanguage(e.target.value);

  useEffect(() => {
    let defaultLang = window.localStorage.getItem('dv-language');
    if (!defaultLang) defaultLang = window.navigator.language.substring(0, 2);

    setLanguage(defaultLang);
  }, [setLanguage]);

  return (
    <select
      name="languageSelector"
      id="languageSelector"
      onChange={handleSelectChange}
      value={getLanguage()}
    >
      {Object.keys(langOptions).map((langOptionKey, index) => (
        <option key={index} value={langOptionKey}>
          {langOptions[langOptionKey]}
        </option>
      ))}
    </select>
  );
};
