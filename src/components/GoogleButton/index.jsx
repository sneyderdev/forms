import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import googleIcon from '@images/google-icon.png';

import Button from './GoogleButton.styles';

const GoogleButton = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const onFormSubmit = (event) => {
    event.preventDefault();

    history.push('/');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Button type="submit">
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
