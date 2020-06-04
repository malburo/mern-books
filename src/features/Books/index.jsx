import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from 'components/NotFound';
import BookPage from './pages/BookPage';

Books.propTypes = {};

function Books(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.url} component={BookPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Books;
