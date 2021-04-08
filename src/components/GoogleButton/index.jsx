import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import googleIcon from '@images/google-icon.png';

import Button from './GoogleButton.styles';

const GoogleButton = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <form>
        <Button type="button">
          <img src={googleIcon} alt="Google" />
          {pathname === '/login'
            ? 'Sign in with Google'
            : 'Sign up with Google'}
        </Button>
      </form>
    </div>
  );
};

export default GoogleButton;
