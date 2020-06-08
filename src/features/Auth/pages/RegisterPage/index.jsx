import RegisterForm from 'features/Auth/components/RegisterForm';
import React from 'react';
import './style.scss';
RegisterPage.propTypes = {};

function RegisterPage(props) {
  function handleSubmit(values, { resetForm }) {
    console.log(values);
    resetForm();
  }
  return (
    <div className="wrapper">
      <div className="register">
        <div className="register__title">
          <p>Register</p>
        </div>
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default RegisterPage;
