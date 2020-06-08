import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import InputField from 'custom-fields/InputField';
import { FastField, Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './style.scss';
LoginForm.propTypes = {};

function LoginForm(props) {
  const initialValues = {
    username: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('This field is required.')
      .min(6, 'Your username is too short'),
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
              name="username"
              component={InputField}
              placeholder="username"
            />
            <FastField
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              component={InputField}
              placeholder="password"
            />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
