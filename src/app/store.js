import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/Auth/AuthSlice';
import bookReducer from 'features/Books/bookSlice';
const rootReducer = {
  auth: authReducer,
  books: bookReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
