import NotFound from 'components/NotFound';
import React from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import BookStorePage from './pages/BookStorePage';
import CreateBookPage from './pages/CreateBookPage';


BookStore.propTypes = {};

function BookStore(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={BookStorePage} />
      <Route exact path={`${match.url}/create`} component={CreateBookPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default BookStore;
