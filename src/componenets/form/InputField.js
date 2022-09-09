import React from 'react';
import PropTypes from 'prop-types';
import Input from '../controls/Input';

const InputField = ({
 name, label, type, value, onChange, error,
}) => (
    <Input
      type={type}
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      error={error}
      autoComplete="off"
    />
    );

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password']),
};

InputField.defaultProps = {
    type: 'text',
    error: null,
};

export default InputField;
