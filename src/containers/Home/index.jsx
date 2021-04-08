import React from 'react';
import { Link } from 'react-router-dom';

import HomeSection from './Home.styles';

const Home = () => (
  <HomeSection>
    <h2>Welcome</h2>
    <div>
      <Link to="/login">Sign in</Link>
      <Link to="/register">Sign up</Link>
    </div>
  </HomeSection>
);

export default Home;
