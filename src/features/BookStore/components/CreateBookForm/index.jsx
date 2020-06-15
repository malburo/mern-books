import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import InputField from 'custom-fields/InputField';
import UploadField from 'custom-fields/UploadField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';
CreateBookForm.propTypes = {
  onSubmit: PropTypes.func,
};
CreateBookForm.defaultProps = {
  onSubmit: null,
};
function CreateBookForm(props) {
  const initialValues = {
    title: '',
    description: '',
    file: null,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),
    description: Yup.string().required('This field is required.'),
    // file: Yup.mixed().required('This field is required.'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}>
      {formik => {
        return (
          <Form className="login-form">
            <FastField
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="text"
              name="title"
              component={InputField}
              placeholder="title"
            />
            <FastField
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              name="description"
              component={InputField}
              placeholder="description"
            />
            <FastField
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="file"
              name="file"
              component={UploadField}
            />
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default CreateBookForm;
