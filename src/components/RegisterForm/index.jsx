import React from 'react';

const RegisterForm = () => (
  <div>
    <form>
      <div>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="username" placeholder="Username" />
      </div>
      <input type="email" name="email" placeholder="Email" />
      <div>
        <input type="password" name="password" placeholder="Password" />
        <span />
      </div>
      <div>
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
        />
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
