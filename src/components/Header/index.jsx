import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
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
    </header>
  );
};

export default Header;
