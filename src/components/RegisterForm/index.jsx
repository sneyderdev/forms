import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, PasswordContainer } from '@shared';

import RegisterFormContainer from './RegisterForm.styles';

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({});
  const history = useHistory();

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

  const onInputChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    setFormValues({
      ...formValues,
      [event.target.name]: value,
    });
  };

  const canSubmit = [
    formValues.name,
    formValues.username,
    formValues.email,
    formValues.password,
    formValues.confirmPassword,
    formValues.agreeToTerms,
  ].every(Boolean);

  const onFormSubmit = (event) => {
    event.preventDefault();

    history.push('/');
  };

  return (
    <div>
      <RegisterFormContainer onSubmit={onFormSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={onInputChange}
          />
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={onInputChange}
        />
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
            onChange={onInputChange}
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
            name="confirmPassword"
            placeholder="Confirm password"
            required
            onChange={onInputChange}
          />
        </PasswordContainer>
        <div>
          <input
            type="checkbox"
            name="agreeToTerms"
            id="agreeToTerms"
            required
            onChange={onInputChange}
          />
          <label htmlFor="agreeToTerms">
            Accept our <a href="/">Terms of Service</a>.
          </label>
        </div>
        <Input type="submit" value="Create Account" disabled={!canSubmit} />
      </RegisterFormContainer>
    </div>
  );
};

export default RegisterForm;
