import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Input, Form } from 'antd';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};
function InputField(props) {
  const { field, form, type, label, placeholder, disabled, prefix } = props;
  const { name } = field;
  const { errors, touched } = form;
  console.log(form.errors);
  const showError = errors[name] && touched[name];
  return (
    <Form.Item
      label={label}
      validateStatus={showError ? 'error' : ''}
      help={showError ? errors[name] : null}>
      <Input
        id={name}
        {...field}
        prefix={prefix}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}

export default InputField;
