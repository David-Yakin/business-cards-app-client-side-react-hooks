import { useState } from 'react';

const useCards = (initialState) => {
    const [cards, setCards] = useState(initialState);

    // eslint-disable-next-line max-len
    const handleDelete = (id) => setCards((currentCards) => currentCards.filter((card) => card._id !== id));

    return {
        cards,
        handleDelete,
    };
};

export default useCards;
