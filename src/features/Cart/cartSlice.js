import { createSlice } from '@reduxjs/toolkit';

const carts = createSlice({
  name: 'carts',
  initialState: { bookId: [], userId: null },
  reducers: {
    countCart: (state, action) => {
      return (state = action.payload);
    },
    increase: (state, action) => {
      state.bookId.push(action.payload);
    },
  },
});

const { reducer, actions } = carts;
export const { countCart, increase } = actions;
export default reducer;
