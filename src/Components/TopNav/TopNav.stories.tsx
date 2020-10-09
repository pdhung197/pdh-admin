import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { TopNav } from './TopNav';

export default {
  title: 'Layout/Nav/Top Navigation',
  component: TopNav,
};

export const TopNavViewer = () => (
  <BrowserRouter>
    <Switch>
      <TopNav accessLevel="viewer" />
    </Switch>
  </BrowserRouter>
);

export const TopNavAdmin = () => (
  <BrowserRouter>
    <Switch>
      <TopNav accessLevel="admin" />
    </Switch>
  </BrowserRouter>
);
