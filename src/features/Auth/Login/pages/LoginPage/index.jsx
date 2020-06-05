import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import './style.scss';
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
