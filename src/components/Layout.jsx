import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <section />
      <section>
        {pathname !== '/' && <Header />}
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
