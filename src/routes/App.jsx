import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { Home, Login, Register } from '@containers';
import { Layout } from '@components';

import favicon from '@images/favicon-196.png';

import { theme, GlobalStyle } from '@shared';

const App = () => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} sizes="196x196" />
    </Helmet>

    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
