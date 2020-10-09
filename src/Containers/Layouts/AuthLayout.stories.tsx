import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthLayout } from './AuthLayout';

export default {
  title: 'Layout/Layout/Auth Layout',
  component: AuthLayout,
};

export const AuthLayoutViewer = () => (
  <BrowserRouter>
    <AuthLayout accessLevel="viewer">This is viewer layout</AuthLayout>
  </BrowserRouter>
);

export const AuthLayoutAdmin = () => (
  <BrowserRouter>
    <AuthLayout accessLevel="admin">This is admin layout</AuthLayout>
  </BrowserRouter>
);
