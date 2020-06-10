import { loginSuccess } from 'features/Auth/AuthSlice';
import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import API from 'utils/api';
import './style.scss';
LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const history = useHistory();
  if (isAuthenticated) {
    history.push('/');
  }

  const handleSubmit = async (currentUser, actions) => {
    try {
      const response = await API.call('post', 'auth/login', currentUser);
      localStorage.setItem('jwtToken', response.accessToken);
      API.setToken(response.accessToken);
      dispatch(loginSuccess(response.user));
    } catch (e) {
      actions.setErrors({ ...e.response.data });
    }
  };
  return (
    <div className="wrapper">
      <div className="login">
        <div className="login__title">
          <p>Login</p>
        </div>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default LoginPage;
