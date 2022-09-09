import { useState } from "react";
import Joi from "joi-browser";
import PropTypes from "prop-types";
import { noop } from "bootstrap/js/src/util";

const DEFAULT_OPTIONS = { abortEarly: false };

const validateField = ({ name, value, schema }) => {
  const obj = { [name]: value };
  const fieldSchema = { [name]: schema[name] };
  const { error } = Joi.validate(obj, fieldSchema);
  return error ? error.details[0].message : null;
};

const useForm = ({ emptyForm, schema, validationOptions, onSubmit }) => {
  const [data, setData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const { error } = Joi.validate(
      data,
      schema,
      validationOptions || DEFAULT_OPTIONS
    );

    if (!error) return null;

    const validationResults = {};
    error.details.forEach(errorEntry => {
      validationResults[errorEntry.path[0]] = errorEntry.message;
    });
    return validationResults;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const errorMessage = validateField({ name, value, schema });
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage,
    }));
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors || {});
    if (validationErrors) return;
    onSubmit(data, setErrors);
  };

  return {
    validate,
    data,
    errors,
    handleChange,
    handleSubmit,
  };
};

useForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  emptyForm: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

useForm.defaultProps = {
  onSubmit: noop,
};

export default useForm;
