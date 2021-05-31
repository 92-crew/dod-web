import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Join from '@pages/Join';
import Login from '@pages/Login';

import '@styles/css/common';
import Layout from '@components/common/Layout';
import Wrap from '@components/common/Wrap';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Wrap>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
          </Switch>
        </Wrap>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
