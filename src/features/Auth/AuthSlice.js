import { createSlice } from '@reduxjs/toolkit';

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

export const login = ({ username, password }) => async dispatch => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({ username }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async dispatch => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
