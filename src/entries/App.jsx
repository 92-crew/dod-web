import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '@styles/css/common';
import Layout from '@components/common/Layout';
import { TodoProvider } from '@pages/Main/TodoContext';

const Main = lazy(() => import('@pages/Main'));
const Join = lazy(() => import('@pages/Join'));
const Login = lazy(() => import('@pages/Login'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path={['/', '/login']} component={Login} />
            <TodoProvider>
              <Route path='/main' component={Main} />
            </TodoProvider>
            <Route path='/join' component={Join} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
