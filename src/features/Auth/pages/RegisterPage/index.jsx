import RegisterForm from 'features/Auth/components/RegisterForm';
import React, { useState } from 'react';
import API from 'utils/api';
import './style.scss';
RegisterPage.propTypes = {};

function RegisterPage(props) {

  const handleSubmit = async (user, actions) => {
    try {
      const response = await API.call('post', 'auth/register', user);
      actions.setStatus({ isSuccess: true, message: 'Register success !' });
    } catch (e) {
      actions.setErrors({ ...e.response.data });
      actions.setStatus({ isSuccess: false, message: 'Register failed !' });
    }
  };
  return (
    <div className="wrapper">
      <div className="register">
        <div className="register__title">
          <p>Register</p>
        </div>
        <RegisterForm
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default RegisterPage;
