import NotFound from 'components/NotFound';
import React from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import TransactionPage from './pages/TransactionPage';

Transactions.propTypes = {};

function Transactions(props) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route exact path={match.url} component={TransactionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Transactions;
