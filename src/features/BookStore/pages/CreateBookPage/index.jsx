import React from 'react';
import CreateBookForm from 'features/BookStore/components/CreateBookForm';
import API from 'utils/api';
import { createBook } from 'features/BookStore/bookStoreSlice';
import { useDispatch } from 'react-redux';
CreateBookPage.propTypes = {};

function CreateBookPage(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (newBook, actions) => {
    console.log(newBook);
    let formData = new FormData();
    formData.append('title', newBook.title);
    formData.append('description', newBook.description);
    formData.append('bookPictureUrl', newBook.file);
    const response = await API.call('post', 'store/books/create', formData);
    dispatch(createBook(response.newBook));
  };
  return <CreateBookForm onSubmit={handleSubmit} />;
}

export default CreateBookPage;
