import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Grid, ContentGrid, MainContent, Container } from '@shared';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Grid>
      <section style={{ display: 'none' }} />
      <ContentGrid pathName={pathname}>
        {pathname !== '/' && <Header />}
        <MainContent>
          <Container>
            <h1>
              <Link to="/">Forms</Link>
            </h1>
            {children}
          </Container>
        </MainContent>
        <Footer />
      </ContentGrid>
    </Grid>
  );
};

export default Layout;
