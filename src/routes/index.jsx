import AuthLayout from 'layouts/AuthLayout';
import MainLayout from 'layouts/MainLayout';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import PublicRoute from './publicRoute';
import NotFound from 'components/NotFound';

const Auth = React.lazy(() => import('features/Auth'));
const Books = React.lazy(() => import('features/Books'));
const Transactions = React.lazy(() => import('features/Transactions'));
Routes.propTypes = {};

function Routes(props) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <PublicRoute path="/auth" component={Auth} layout={AuthLayout} />
          <PublicRoute path="/books" component={Books} layout={MainLayout} />
          <PublicRoute
            path="/transactions"
            component={Transactions}
            layout={MainLayout}
          />
          <PublicRoute path="/shops" component={Books} layout={MainLayout} />
          <PublicRoute path="/" component={Books} layout={MainLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
