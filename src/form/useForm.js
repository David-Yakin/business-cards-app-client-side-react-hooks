import { useState } from "react";
import Joi from "joi";
import PropTypes from "prop-types";
import { noop } from "bootstrap/js/src/util";

const DEFAULT_OPTIONS = { abortEarly: false };

const extractKeys = name => {
  const keys = name.split(".");
  let nestedKey = keys.length === 2 ? keys[1] : null;
  const key = keys[0];
  return { key, nestedKey };
};

const validateField = ({ data, name, value, schema }) => {
  console.log({ name, value, Joi });
  const { key, nestedKey } = extractKeys(name);
  let obj = { ...data, [name]: value };
  let path = [key];
  if (nestedKey) {
    obj = { ...data, [key]: { ...data[key], [nestedKey]: value } };
    path = [...path, nestedKey];
  }

  const { error } = schema.validate(obj, { abortEarly: false });
  console.log({ obj, error });
  const fieldErrors = error.details.filter(
    error => JSON.stringify(error.path) === JSON.stringify(path)
  );
  console.log({ fieldErrors });
  return error ? fieldErrors[0]?.message : null;
};

const useForm = ({ emptyForm, schema, validationOptions, onSubmit }) => {
  const [data, setData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    console.log(data);
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

  //  const keyLensPath = name.split(".")
  //  R.set(keyLensPath, value, data)

  const handleChange = ({ target }) => {
    const { name, value } = target;

    console.log({ target });
    const errorMessage = validateField({ data, name, value, schema });
    console.log({ errorMessage });
    const { key, nestedKey } = extractKeys(name);
    if (nestedKey) {
      setErrors(prev => ({
        ...prev,
        [key]: { ...prev[key], [nestedKey]: errorMessage },
      }));
      setData(prev => ({
        ...prev,
        [key]: { ...prev[key], [nestedKey]: value },
      }));
      return;
    }
    setErrors(prev => ({
      ...prev,
      [key]: errorMessage,
    }));
    setData(prev => ({
      ...prev,
      [key]: value,
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
