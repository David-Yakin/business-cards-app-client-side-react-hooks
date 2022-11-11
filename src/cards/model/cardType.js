import { number, oneOfType, shape, string } from "prop-types";

const cardType = shape({
  _id: string,
  subtitle: string,
  title: string,
  description: string,
  address: shape({
    state: string,
    country: string,
    city: string,
    street: string,
    houseNumber: number,
    zip: number,
  }),
  bizNumber: oneOfType([string, number]),
  phone: string,
  image: shape({
    url: string,
    alt: string,
  }),
});

export default cardType;
