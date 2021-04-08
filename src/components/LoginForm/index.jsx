import React from 'react';

const LoginForm = () => (
  <div>
    <form>
      <input type="text" name="email" placeholder="Your email" />
      <div>
        <input type="password" name="password" placeholder="Your password" />
        <span />
        <a href="/">Forgot password?</a>
      </div>
      <input type="submit" value="Sign in" />
    </form>
  </div>
);

export default LoginForm;
