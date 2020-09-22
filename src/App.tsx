import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Components/Routing/Routing';
import { TranslationProvider } from './hooks/useTranslation/TranslationProvider';

export const App = () => (
  <TranslationProvider>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </TranslationProvider>
);
