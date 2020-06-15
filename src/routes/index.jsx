import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import PublicRoute from './publicRoute';
import NotFound from 'components/NotFound';
import BlankLayout from 'components/Layouts/BlankLayout';
import MainLayout from 'components/Layouts/MainLayout';
import PrivateRoute from './privateRoute';

const Auth = React.lazy(() => import('features/Auth'));
const Books = React.lazy(() => import('features/Books'));
const BookStore = React.lazy(() => import('features/BookStore'));
const Transactions = React.lazy(() => import('features/Transactions'));

Routes.propTypes = {};

function Routes(props) {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <PublicRoute path="/auth" component={Auth} layout={BlankLayout} />
          <PrivateRoute path="/books" component={Books} layout={MainLayout} />
          <PrivateRoute
            path="/store/books"
            component={BookStore}
            layout={MainLayout}
          />
          <PrivateRoute
            path="/transactions"
            component={Transactions}
            layout={MainLayout}
          />
          <PrivateRoute path="/shops" component={Books} layout={MainLayout} />
          <PrivateRoute path="/" component={Books} layout={MainLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
