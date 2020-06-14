import { getBooks } from 'features/Books/bookSlice';
import BookList from 'features/Books/components/BookList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import API from 'utils/api';
BookPage.propTypes = {};

function BookPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await API.call('get', 'books');
      dispatch(getBooks(response.books));
    }
    fetchData();
  }, []);
  return <BookList />;
}

export default BookPage;
