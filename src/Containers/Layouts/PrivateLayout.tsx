import React from 'react';
import { TopNav } from '../../Components/Nav/TopNav';

type LayoutProps = {
  children: React.ReactNode;
};

export const PrivateLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
};
