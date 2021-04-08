import React from 'react';

import { Input, PasswordContainer } from '@shared';

import LoginFormContainer from './LoginForm.styles';

const LoginForm = () => (
  <div>
    <LoginFormContainer>
      <Input type="text" name="email" placeholder="Your email" />
      <PasswordContainer>
        <Input type="password" name="password" placeholder="Your password" />
        <span />
      </PasswordContainer>
      <a href="/">Forgot password?</a>
      <Input type="submit" value="Sign in" />
    </LoginFormContainer>
  </div>
);

export default LoginForm;
