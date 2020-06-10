import { createSlice } from '@reduxjs/toolkit';
import API from 'utils/api';
// const initialUser = localStorage.getItem('user')
//   ? JSON.parse(localStorage.getItem('user'))
//   : null;

const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export default auth.reducer;

// actions
const { loginSuccess, logoutSuccess } = auth.actions;

export const login = user => async dispatch => {
  try {
    console.log(user);
    const response = await API.call('post', 'auth/login', user);
    localStorage.setItem('jwtToken', response.accessToken);
    API.setToken(response.accessToken);
    dispatch(loginSuccess(response.user));
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async dispatch => {
  try {
    localStorage.removeItem('jwtToken');
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
