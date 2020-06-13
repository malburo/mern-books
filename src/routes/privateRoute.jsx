import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import API from 'utils/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { authPrivateRouter } from 'features/Auth/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
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
        const response = await API.call('get', 'auth');
        console.log(response);
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
