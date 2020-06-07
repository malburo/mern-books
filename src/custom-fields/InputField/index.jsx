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
  return (
    <Form.Item
      label={label}
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}>
      <Input
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
