import React from 'react';

import { Input } from '@shared';

import LoginFormContainer from './LoginForm.styles';

const LoginForm = () => (
  <div>
    <LoginFormContainer>
      <Input type="text" name="email" placeholder="Your email" />
      <div>
        <Input type="password" name="password" placeholder="Your password" />
        <span />
      </div>
      <a href="/">Forgot password?</a>
      <Input type="submit" value="Sign in" />
    </LoginFormContainer>
  </div>
);

export default LoginForm;
