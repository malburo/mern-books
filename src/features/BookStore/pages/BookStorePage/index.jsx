import BookList from 'features/Books/components/BookList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from 'utils/api';
import { getBooks } from 'features/BookStore/bookStoreSlice';
BookStorePage.propTypes = {};

function BookStorePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await API.call('get', 'store/books');
      dispatch(getBooks(response.books));
    }
    fetchData();
  }, []);
  const books = useSelector(state => state.bookStore);
  return <BookList books={books} />;
}

export default BookStorePage;
