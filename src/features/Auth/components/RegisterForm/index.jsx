import { LockOutlined, UserOutlined, AuditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './style.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
RegisterForm.propTypes = {};

function RegisterForm(props) {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('This field is required.')
      .min(6, 'Your username is too short'),
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
          <Form className="register-form">
            <FastField
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="username"
              component={InputField}
              placeholder="username"
            />
            <FastField
              prefix={<AuditOutlined className="site-form-item-icon" />}
              type="email"
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Register
            </Button>
            Or <Link to="/auth/login">login now!</Link>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
