import React, { ReactNode } from 'react';
import { LanguageSelector } from '../../Components/LanguageSelector/LanguageSelector';
import { TopNav } from '../../Components/Nav/TopNav';
import { Trans } from '../../hooks/useTranslation/TranslationProvider';

type LayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children, ...otherProps }: LayoutProps) => {
  return (
    <>
      <TopNav />
      <LanguageSelector />
      <p>
        <Trans t="common.adminView" />
      </p>
      {children}
    </>
  );
};
