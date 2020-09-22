import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { TopNav } from './TopNav';

export default {
  title: 'Top Navigation',
  component: TopNav,
};

export const TopNavigation = () => (
  <BrowserRouter>
    <Switch>
      <TopNav />
    </Switch>
  </BrowserRouter>
);
