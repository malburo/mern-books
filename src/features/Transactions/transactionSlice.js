import { createSlice } from '@reduxjs/toolkit';

const transactions = createSlice({
  name: 'transactions',
  initialState: [],
  reducers: {
    setTransactions: (state, action) => {
      return (state = action.payload);
    },
    createTransaction: (state, action) => {
      state.push(action.payload);
    },
    completeTransaction: (state, action) => {
      return state.filter(state => {
        return state._id !== action.payload;
      });
    },
  },
});

const { reducer, actions } = transactions;
export const {
  setTransactions,
  createTransaction,
  completeTransaction,
} = actions;
export default reducer;
