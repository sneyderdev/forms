import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section>
    <h2>Welcome</h2>
    <div>
      <Link to="/login">Sign in</Link>
      <Link to="/register">Sign up</Link>
    </div>
  </section>
);

export default Home;
