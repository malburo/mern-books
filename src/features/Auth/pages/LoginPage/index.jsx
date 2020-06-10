import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/AuthSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (currentUser, { resetForm }) => {
    const action = login(currentUser);
    dispatch(action);
    resetForm();
    // history.push('/');
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
