import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import API from 'utils/api';
import { setBooks, deleteBook } from 'features/BookStore/bookStoreSlice';
import BookStoreList from 'features/BookStore/components/BookStoreList';
BookStorePage.propTypes = {};

function BookStorePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await API.call('get', 'store/books');
      dispatch(setBooks(response.books));
    }
    fetchData();
  }, []);
  const handleDeleteBook = bookId => {
    return async e => {
      try {
        const response = await API.call(
          'delete',
          `store/books/delete/${bookId}`
        );
        console.log(response);
        dispatch(deleteBook(bookId));
      } catch (error) {
        console.log(error);
      }
    };
  };
  const books = useSelector(state => state.bookStore);
  return <BookStoreList books={books} handleDeleteBook={handleDeleteBook} />;
}

export default BookStorePage;
