import React from 'react';

import googleIcon from '@images/google-icon.png';

import Button from './GoogleButton.styles';

const GoogleButton = () => (
  <div>
    <form>
      <Button type="button">
        <img src={googleIcon} alt="Google" />
        Sign in with Google
      </Button>
    </form>
  </div>
);

export default GoogleButton;
