import React, { useRef } from 'react';

import { Input, PasswordContainer } from '@shared';

import LoginFormContainer from './LoginForm.styles';

const LoginForm = () => {
  const passwordEye = useRef(null);

  const onPasswordEyeClick = () => {
    passwordEye.current.classList.toggle('active');
    if (passwordEye.current.nextSibling.type === 'password') {
      passwordEye.current.nextSibling.type = 'text';
    } else {
      passwordEye.current.nextSibling.type = 'password';
    }
  };

  return (
    <div>
      <LoginFormContainer>
        <Input type="email" name="email" placeholder="Your email" required />
        <PasswordContainer>
          <span
            role="button"
            tabIndex={0}
            aria-label="Change input visibility"
            ref={passwordEye}
            onClick={onPasswordEyeClick}
            onKeyPress={onPasswordEyeClick}
          />
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
        </PasswordContainer>
        <a href="/">Forgot password?</a>
        <Input type="submit" value="Sign in" />
      </LoginFormContainer>
    </div>
  );
};

export default LoginForm;
