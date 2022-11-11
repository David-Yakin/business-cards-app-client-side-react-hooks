import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const CardField = ({ label, value }) => {
  return (
    <Typography variant="body2" color="text.secondary">
      <strong>{label}: </strong> {value}
    </Typography>
  );
};

CardField.propTypes = {
  label: PropTypes.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
};

export default CardField;
