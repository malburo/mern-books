import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

UploadFiled.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  disabled: PropTypes.bool,
};

UploadFiled.defaultProps = {
  type: 'file',
  label: '',
  disabled: false,
};
function UploadFiled(props) {
  const { field, form, type, disabled } = props;
  const { setFieldValue } = form;
  const { name } = field;
  return (
    <Form.Item>
      <Input
        id={name}
        onChange={event => {
          setFieldValue('file', event.currentTarget.files[0]);
        }}
        type={type}
        disabled={disabled}
      />
    </Form.Item>
  );
}

export default UploadFiled;
