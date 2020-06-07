import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/LoginPage';

Auth.propTypes = {};

function Auth(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <Route exact path={`${match.url}/register`} component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Auth;