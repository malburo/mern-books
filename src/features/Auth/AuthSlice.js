import { createSlice } from '@reduxjs/toolkit';
const auth = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.login = action.payload;
    },
    register: (state, action) => {
      state.register = action.payload;
    },
  },
});

const { reducers, actions } = auth;
export const { login, register } = actions;
export default reducers;
