import LoginForm from 'features/Auth/components/LoginForm';
import React from 'react';
import './style.scss';
LoginPage.propTypes = {};

function LoginPage(props) {
  function handleSubmit(values, { resetForm }) {
    console.log(values);
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
