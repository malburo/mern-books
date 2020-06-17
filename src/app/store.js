import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import bookReducer from 'features/Books/bookSlice';
import bookStoreReducer from 'features/BookStore/bookStoreSlice';
import cartReducer from 'features/Cart/cartSlice';
import transactionReducer from 'features/Transactions/transactionSlice';

const rootReducer = {
  auth: authReducer,
  books: bookReducer,
  bookStore: bookStoreReducer,
  carts: cartReducer,
  transactions: transactionReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
