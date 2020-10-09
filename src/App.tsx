import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Components/Routing/Routing';
import { withTranslation } from './useTranslation';

export const App = withTranslation(() => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
));
