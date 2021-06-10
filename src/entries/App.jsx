import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Join from '@pages/Join';
import Login from '@pages/Login';

import '@styles/css/common';
import Layout from '@components/common/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={['/', '/login']} component={Login} />
          <Route path='/main' component={Main} />
          <Route path='/join' component={Join} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
