import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import API from 'utils/api';
PrivateRoute.propTypes = {};

function PrivateRoute({ component: Component, layout: Layout, ...rest }) {
  const token = localStorage.jwtToken;
  const history = useHistory();
  useEffect(() => {
    const auth = async () => {
      try {
        if (token) {
          API.setToken(token);
        } else {
          history.push('/auth/login');
        }
        await API.call('get', 'auth');
      } catch (error) {
        localStorage.removeItem('jwtToken');
        history.push('/auth/login');
      }
    };
    auth();
  });
  return (
    <Route
      {...rest}
      render={props => {
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
