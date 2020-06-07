import NotFound from 'components/NotFound';
import React from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import BookPage from './pages/BookPage';

Books.propTypes = {};

function Books(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={BookPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Books;
