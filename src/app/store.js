import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import bookReducer from 'features/Books/bookSlice';
import bookStoreReducer from 'features/BookStore/bookStoreSlice';
const rootReducer = {
  auth: authReducer,
  books: bookReducer,
  bookStore: bookStoreReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
