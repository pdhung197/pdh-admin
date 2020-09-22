import React, { FunctionComponent } from 'react';
import { AuthLayout } from '../Containers/Layouts/AuthLayout';

export const useLayout = (Component: FunctionComponent) => (props: any) => (
  <AuthLayout>
    <Component {...props} />
  </AuthLayout>
);
