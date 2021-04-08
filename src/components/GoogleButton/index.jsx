import React from 'react';

import googleIcon from '@images/google-icon.png';

const GoogleButton = () => (
  <div>
    <form>
      <button type="button">
        <img src={googleIcon} alt="Google" />
        Sign in with Google
      </button>
    </form>
  </div>
);

export default GoogleButton;
