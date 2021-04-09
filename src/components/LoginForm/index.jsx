import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Input, PasswordContainer } from '@shared';

import LoginFormContainer from './LoginForm.styles';

const LoginForm = () => {
  const passwordEye = useRef(null);
  const [formValues, setFormValues] = useState({});
  const history = useHistory();

  const onPasswordEyeClick = () => {
    passwordEye.current.classList.toggle('active');
    if (passwordEye.current.nextSibling.type === 'password') {
      passwordEye.current.nextSibling.type = 'text';
    } else {
      passwordEye.current.nextSibling.type = 'password';
    }
  };

  const onInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const canSubmit = [formValues.email, formValues.password].every(Boolean);

  const onFormSubmit = (event) => {
    event.preventDefault();

    history.push('/');
  };

  return (
    <div>
      <LoginFormContainer onSubmit={onFormSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          required
          onChange={onInputChange}
        />
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
            onChange={onInputChange}
          />
        </PasswordContainer>
        <Link to="/">Forgot password?</Link>
        <Input type="submit" value="Sign in" disabled={!canSubmit} />
      </LoginFormContainer>
    </div>
  );
};

export default LoginForm;
