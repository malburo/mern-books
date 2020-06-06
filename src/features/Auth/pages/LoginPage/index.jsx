import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LoginForm from 'features/Auth/components/LoginForm';
LoginPage.propTypes = {};

function LoginPage(props) {
  return (
    <div className="wrapper">
      <div className="login">
        <div className="login__title">
          <p>Login</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
