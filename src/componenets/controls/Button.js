/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, label, type }) => (
    <button
      disabled={disabled}
      className="btn btn-primary mt-2 col-12"
      type={type}
    >
        {label}
    </button>
);

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
    disabled: false,
    type: 'button',
};

export default Button;
