import {
 number, oneOfType, shape, string,
} from 'prop-types';

const cardType = shape({
    _id: string,
    title: string,
    description: string,
    address: string,
    bizNumber: oneOfType([string, number]),
    phone: string,
    image: shape({
        url: string,
        alt: string,
    }),
});

export default cardType;
