import { getBooks } from 'features/Books/bookSlice';
import BookList from 'features/Books/components/BookList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from 'features/Cart/cartSlice';
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
  const handleAddToCart = bookId => {
    return async e => {
      try {
        const book = { bookId };
        const response = await API.call('post', 'cart/create', book);
        dispatch(increase(bookId));
      } catch (error) {
        console.log(error);
      }
    };
  };
  const books = useSelector(state => state.books);
  return <BookList books={books} handleAddToCart={handleAddToCart} />;
}

export default BookPage;
