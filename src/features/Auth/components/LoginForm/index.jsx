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
    password: null,
  };
  function onFinish(values) {
    console.log('Received values of form: ', values);
  }
  return (
    <Formik initialValues={initialValues}>
      {formikProps => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}>
            <FastField
              name="username"
              component={InputField}
              label="username"
              placeholder="username"
            />
            <FastField
              name="password"
              component={InputField}
              label="password"
              placeholder="password"
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
