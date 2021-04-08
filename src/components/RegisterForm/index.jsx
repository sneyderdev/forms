import React from 'react';

import { Input, PasswordContainer } from '@shared';

import RegisterFormContainer from './RegisterForm.styles';

const RegisterForm = () => (
  <div>
    <RegisterFormContainer>
      <div>
        <Input type="text" name="name" placeholder="Name" />
        <Input type="text" name="username" placeholder="Username" />
      </div>
      <Input type="email" name="email" placeholder="Email" />
      <PasswordContainer>
        <Input type="password" name="password" placeholder="Password" />
        <span />
      </PasswordContainer>
      <PasswordContainer>
        <Input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
        />
        <span />
      </PasswordContainer>
      <div>
        <input type="checkbox" name="agree-to-terms" id="agree-to-terms" />
        <label htmlFor="agree-to-terms">
          Accept our <a href="/">Terms of Service</a>.
        </label>
      </div>
      <Input type="submit" value="Create Account" />
    </RegisterFormContainer>
  </div>
);

export default RegisterForm;
