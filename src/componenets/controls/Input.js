/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
 name, label, error, ...rest
}) => (
    <div className="form-group mb-1">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} className="form-control" />
        {error && <span className="text-danger">{error}</span>}
    </div>
    );

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
};

Input.defaultProps = {
    error: null,
};

export default Input;
