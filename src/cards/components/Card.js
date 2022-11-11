import * as React from "react";
import PropTypes from "prop-types";
import MuiCard from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea, Divider } from "@mui/material";
import cardType from "./../model/cardType";
import CardTitle from "./CardTitle";
import CardFields from "./CardFields";

const Card = ({ card, onDelete }) => {
  const {
    title,
    subtitle,
    image: { url, alt },
  } = card;

  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="194" image={url} alt={alt} />
        <CardContent sx={{ paddingBottom: 0 }}>
          <CardTitle title={title} subtitle={subtitle} />
          <Divider />
          <CardFields card={card} />
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{ paddingTop: 0, justifyContent: "end" }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
