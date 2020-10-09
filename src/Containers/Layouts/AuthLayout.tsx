import React, { ReactNode } from 'react';
import { Breadcrumb } from '../../Components/Breadcrumb/Breadcrumb';
import { Footer } from '../../Components/Footer/Footer';
import { LanguageSelector } from '../../Components/LanguageSelector/LanguageSelector';
import { TopNav } from '../../Components/TopNav/TopNav';
import { PrivateRouteType } from '../../Models/Route';
import { Header } from '../Header/Header';
import { NavSide } from '../NavSide/NavSide';
import { SettingSide } from '../SettingSide/SettingSide';
import { useTranslation } from '../../useTranslation';
import { Trans } from '../../useTranslation';

interface LayoutProps extends PrivateRouteType {
  children: ReactNode;
}

export const AuthLayout = ({ children, accessLevel }: LayoutProps) => {
  const { setLanguage } = useTranslation();

  return (
    <>
      <Header />
      <TopNav accessLevel={accessLevel} />
      <LanguageSelector />
      <NavSide accessLevel={accessLevel} />
      <SettingSide />
      <main>
        <Trans
          t="common.adminView"
          format={{ text: 'Hưng', date: '09/05/2020 09:05:00' }}
          components="h1"
        />
        <button onClick={() => setLanguage('en')}>Change language</button>
        <button onClick={() => setLanguage('vi')}>Đổi ngôn ngữ</button>
        <Breadcrumb />
        {children}
      </main>
      <Footer />
    </>
  );
};
