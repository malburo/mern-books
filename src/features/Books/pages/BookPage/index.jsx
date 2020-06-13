import BookList from 'features/Books/components/BookList';
import React, { useEffect, useState } from 'react';
import API from 'utils/api';

BookPage.propTypes = {};

function BookPage(props) {
  useEffect(() => {
    const fetchData = async () => {
      const response = await API.call('get', 'books');
      console.log(response.books);
    };
    fetchData();
  });
  return <BookList />;
}

export default BookPage;
