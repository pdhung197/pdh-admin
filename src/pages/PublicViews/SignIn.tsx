import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../configs/links';

export const SignIn = () => {
  return (
    <div>
      <p>Sign in page</p>
      <Link to={links.authenticationCallback}>Login done</Link>
    </div>
  );
};
