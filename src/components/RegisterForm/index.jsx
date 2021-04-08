import React from 'react';

const RegisterForm = () => (
  <div>
    <form>
      <div>
        <input type="text" />
        <input type="text" />
      </div>
      <input type="email" />
      <div>
        <input type="password" />
        <span />
      </div>
      <div>
        <input type="password" />
        <span />
      </div>
      <div>
        <label htmlFor="agree-to-terms">
          <input type="checkbox" name="agree-to-terms" id="agree-to-terms" />
          Accept our <a href="/">Terms of Service</a>.
        </label>
      </div>
      <input type="submit" value="Create Account" />
    </form>
  </div>
);

export default RegisterForm;
