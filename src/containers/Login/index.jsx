import React from 'react';
import { Helmet } from 'react-helmet';

import { GoogleButton, LoginForm } from '@components';

import { FormSection } from '@shared';

const Login = () => (
  <>
    <Helmet>
      <title>Sign in - Forms</title>
    </Helmet>

    <FormSection>
      <h2>Sign in to Forms</h2>
      <GoogleButton />
      <hr />
      <LoginForm />
    </FormSection>
  </>
);

export default Login;
