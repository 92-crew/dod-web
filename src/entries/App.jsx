import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '@pages/Main';
import Join from '@pages/Join';
import Login from '@pages/Login';

import '@styles/css/common';

function App() {
  return (
    <BrowserRouter>
      <main class="container">
        <div class="wrap">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
