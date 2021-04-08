import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import HeaderContainer from './Header.styles';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <nav>
        {pathname === '/login' ? (
          <p>
            No account? <Link to="/register">Create one</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
