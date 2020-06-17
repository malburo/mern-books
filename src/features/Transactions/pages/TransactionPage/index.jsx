import TransactionList from 'features/Transactions/components/TransactionList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTransactions } from 'features/Transactions/transactionSlice';
import API from 'utils/api';
TransactionPage.propTypes = {};

function TransactionPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await API.call('get', 'transactions');
      dispatch(setTransactions(response.transactions));
    }
    fetchData();
  }, []);
  return <TransactionList />;
}

export default TransactionPage;
