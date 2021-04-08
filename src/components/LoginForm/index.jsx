import React from 'react';

const LoginForm = () => (
  <div>
    <form>
      <input type="text" />
      <div>
        <input type="password" />
        <span />
        <a href="/">Forgot password?</a>
      </div>
      <input type="submit" value="Sign in" />
    </form>
  </div>
);

export default LoginForm;
