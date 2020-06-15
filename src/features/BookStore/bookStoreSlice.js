import { createSlice } from '@reduxjs/toolkit';

const bookStore = createSlice({
  name: 'bookStore',
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

const { reducer, actions } = bookStore;
export const { getBooks, createBook } = actions;
export default reducer;
