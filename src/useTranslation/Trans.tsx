import React, { useContext } from 'react';
import { getObjectWithKey } from './helpers/common';
import { TransProps } from './models/Translation';
import { TranslationContext } from './translationContext';

export const Trans = ({ t: transKey, format, components: RenderingComponent }: TransProps) => {
  const { lang: loadedLanguage } = useContext(TranslationContext);

  const transContent = getObjectWithKey(loadedLanguage, transKey, format) || transKey;

  if (!RenderingComponent) return transContent;

  return <RenderingComponent>{transContent}</RenderingComponent>;
};
