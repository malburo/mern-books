import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import './style.scss';
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  onSubmit: null,
};
function LoginForm(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('This field is required.')
      .min(6, 'Your email is too short'),
    password: Yup.string()
      .required('Require password')
      .min(6, 'Your password is too short'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}>
      {formikProps => {
        return (
          <Form className="login-form">
            <FastField
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="email"
              component={InputField}
              placeholder="email"
            />
            <FastField
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              component={InputField}
              placeholder="password"
            />
            <Link to="/about" className="login-form-forgot">
              Forgot password
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Login
            </Button>
            Or <Link to="/auth/register">register now!</Link>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
