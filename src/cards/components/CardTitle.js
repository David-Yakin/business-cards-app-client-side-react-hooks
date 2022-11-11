import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const CardTitle = ({ title, subtitle }) => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginBottom: 2 }}>
        {subtitle}
      </Typography>
    </>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CardTitle;
