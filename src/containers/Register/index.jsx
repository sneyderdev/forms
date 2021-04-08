import React from 'react';

import { GoogleButton, RegisterForm } from '@components';

import { FormSection } from '@shared';

const Register = () => (
  <FormSection>
    <h2>Sign up to Forms</h2>
    <GoogleButton />
    <hr />
    <RegisterForm />
  </FormSection>
);

export default Register;
