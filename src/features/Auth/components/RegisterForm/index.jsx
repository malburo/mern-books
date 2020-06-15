import { AuditOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Spin } from 'antd';
import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as Yup from 'yup';
import './style.scss';

RegisterForm.propTypes = {};

function RegisterForm(props) {
  const { onSubmit } = props;
  const initialValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('This field is required.')
      .min(2, 'Your name is too short'),
    username: Yup.string()
      .required('This field is required.')
      .min(2, 'Your name is too short'),
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
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ isValid, dirty, isSubmitting, status }) => {
        return (
          <Form className="register-form">
            <FastField
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="fullname"
              component={InputField}
              placeholder="fullname"
            />
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
              className="register-form-button"
              disabled={!(isValid && dirty) || isSubmitting}>
              {isSubmitting ? <Spin /> : 'Register'}
            </Button>
            {status?.message && status.isSuccess && (
              <Alert
                message={status.message}
                type="success"
                className="alert-register"
              />
            )}
            {status?.message && !status.isSuccess && (
              <Alert
                message={status.message}
                type="error"
                className="alert-register"
              />
            )}
            <Link to="/auth/login">Login now!</Link>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
