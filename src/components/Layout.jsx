import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <section />
      <section>
        {pathname !== '/' && <Header />}
        <main>
          <h1>
            <Link to="/">Forms</Link>
          </h1>
          {children}
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
