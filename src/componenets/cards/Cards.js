import PropTypes from 'prop-types';
import cardType from '../../model/types/cardType';
import Card from './Card';

const Cards = ({ cards, onDelete }) => {
    if (!cards.length) return null;

    return (
        <div className="row">
            {cards.map((card) => (
                <Card card={card} key={card._id} onDelete={() => onDelete(card._id)} />
            ))}
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.arrayOf(cardType),
    onDelete: PropTypes.func.isRequired,
};

Cards.defaultProps = {
    cards: [],
};

export default Cards;
