import React from 'react';

import { GoogleButton, LoginForm } from '@components';

import { FormSection } from '@shared';

const Login = () => (
  <FormSection>
    <h2>Sign in to Forms</h2>
    <GoogleButton />
    <hr />
    <LoginForm />
  </FormSection>
);

export default Login;
