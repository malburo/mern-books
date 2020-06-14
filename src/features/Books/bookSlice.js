import { createSlice } from '@reduxjs/toolkit';

const books = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    getBooks: (state, action) => {
      return (state = action.payload);
    },
  },
});

const { reducer, actions } = books;
export const { getBooks } = actions;
export default reducer;
