import { createSlice } from '@reduxjs/toolkit';

const books = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: (state, action) => {
      return (state = action.payload);
    },
    createBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { reducer, actions } = books;
export const { getBooks, createBook } = actions;
export default reducer;
