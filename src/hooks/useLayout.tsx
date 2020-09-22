import React, { FunctionComponent } from 'react';

export const useLayout = (Component: FunctionComponent) => (props: any) => (
  <>
    <Component {...props} />
  </>
);
