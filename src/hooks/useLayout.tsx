import React, { FunctionComponent } from 'react';
import { PrivateLayout } from '../Containers/Layouts/PrivateLayout';

export const useLayout = (Component: FunctionComponent) => (props: any) => (
  <PrivateLayout>
    <Component {...props} />
  </PrivateLayout>
);
