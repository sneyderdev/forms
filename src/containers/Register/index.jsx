import React from 'react';
import { Helmet } from 'react-helmet';

import { GoogleButton, RegisterForm } from '@components';

import { FormSection } from '@shared';

const Register = () => (
  <>
    <Helmet>
      <title>Sign up - Forms</title>
    </Helmet>

    <FormSection>
      <h2>Sign up to Forms</h2>
      <GoogleButton />
      <hr />
      <RegisterForm />
    </FormSection>
  </>
);

export default Register;
