import React, { useEffect } from 'react';

import { Input, PasswordContainer } from '@shared';

import RegisterFormContainer from './RegisterForm.styles';

const RegisterForm = () => {
  useEffect(() => {
    const passwordEye = document.querySelectorAll('.passwordEye');

    passwordEye.forEach((eye) => {
      eye.addEventListener('click', () => {
        eye.classList.toggle('active');
        if (eye.nextSibling.type === 'password') {
          eye.nextSibling.type = 'text';
        } else {
          eye.nextSibling.type = 'password';
        }
      });
    });
  }, []);

  return (
    <div>
      <RegisterFormContainer>
        <div>
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="text" name="username" placeholder="Username" required />
        </div>
        <Input type="email" name="email" placeholder="Email" required />
        <PasswordContainer>
          <span
            className="passwordEye"
            role="button"
            tabIndex={0}
            aria-label="Change input visibility"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </PasswordContainer>
        <PasswordContainer>
          <span
            className="passwordEye"
            role="button"
            tabIndex={0}
            aria-label="Change input visibility"
          />
          <Input
            type="password"
            name="confirm-password"
            placeholder="Confirm password"
            required
          />
        </PasswordContainer>
        <div>
          <input
            type="checkbox"
            name="agree-to-terms"
            id="agree-to-terms"
            required
          />
          <label htmlFor="agree-to-terms">
            Accept our <a href="/">Terms of Service</a>.
          </label>
        </div>
        <Input type="submit" value="Create Account" />
      </RegisterFormContainer>
    </div>
  );
};

export default RegisterForm;
