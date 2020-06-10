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

const { reducer, actions } = auth;
export const { loginSuccess, logoutSuccess } = actions;
export default reducer;

// export const logout = () => async dispatch => {
//   try {
//     localStorage.removeItem('jwtToken');
//     return dispatch(logoutSuccess());
//   } catch (e) {
//     return console.error(e.response.data);
//   }
// };
