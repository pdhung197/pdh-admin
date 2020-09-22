import React, { ReactNode } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { LanguageSelector } from '../../Components/LanguageSelector/LanguageSelector';
import { TopNav } from '../../Components/TopNav/TopNav';
import { Trans } from '../../hooks/useTranslation/TranslationProvider';
import { PrivateRouteType } from '../../Models/Route';
import { Header } from '../Header/Header';
import { NavSide } from '../NavSide/NavSide';
import { SettingSide } from '../SettingSide/SettingSide';

interface LayoutProps extends PrivateRouteType {
  children: ReactNode;
}

export const AuthLayout = ({ children, accessLevel }: LayoutProps) => {
  return (
    <>
      <Header />
      <TopNav accessLevel={accessLevel} />
      <LanguageSelector />
      <NavSide accessLevel={accessLevel} />
      <SettingSide />
      <main>
        <p>
          <Trans t="common.adminView" />
        </p>
        {children}
      </main>
      <Footer />
    </>
  );
};
