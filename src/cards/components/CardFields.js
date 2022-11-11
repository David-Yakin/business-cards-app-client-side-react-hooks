import { Box } from "@mui/material";
import React from "react";
import cardType from "./../model/cardType";
import CardField from "./CardField";

const CardFields = ({ card }) => {
  const { phone, address, bizNumber } = card;
  return (
    <Box sx={{ marginTop: 2 }}>
      <CardField label="Phone" value={phone} />
      <CardField label="Address" value={address.country} />
      <CardField label="Card Number" value={bizNumber} />
    </Box>
  );
};

CardFields.propTypes = {
  card: cardType.isRequired,
};

export default CardFields;
