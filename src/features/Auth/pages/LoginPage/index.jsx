import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LoginForm from 'features/Auth/components/LoginForm';
LoginPage.propTypes = {};

function LoginPage(props) {
  function handleSubmit(values, { resetForm }) {
    resetForm();
  }
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
