import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

PrivateRoute.propTypes = {};

function PrivateRoute({ component: Component, layout: Layout, ...rest }) {
  const token = null;
  return (
    <Route
      {...rest}
      render={props => {
        if (!token) {
          return <Redirect to={{ pathname: '/login' }} />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PrivateRoute;
