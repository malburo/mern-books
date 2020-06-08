import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { Formik, Form, FastField } from 'formik';
import React from 'react';
import './style.scss';
import InputField from 'custom-fields/InputField';
LoginForm.propTypes = {};

function LoginForm(props) {
  const initialValues = {
    username: '',
    password: '',
  };
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, { resetForm }) => {
        console.log('Hi :', values);
        resetForm({ values: '' });
      }}>
      {formikProps => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
