import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Join from '@pages/Join';
import Login from '@pages/Login';
import Header from '@components/common/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
