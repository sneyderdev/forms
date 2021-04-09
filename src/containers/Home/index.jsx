import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomeSection from './Home.styles';

const Home = () => (
  <>
    <Helmet>
      <title>Forms by Sneyder Barreto</title>
    </Helmet>

    <HomeSection>
      <h2>Welcome</h2>
      <div>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Sign up</Link>
      </div>
    </HomeSection>
  </>
);

export default Home;
