import { useEffect, useState } from "react";
import useCardsEndpoints from "./useCardsEndpoints";

const useCards = () => {
  const [cards, setCards] = useState([]);
  const { getCards } = useCardsEndpoints();

  // eslint-disable-next-line max-len
  const handleDelete = id =>
    setCards(currentCards => currentCards.filter(card => card._id !== id));

  useEffect(() => {
    getCards()
      .then(setCards)
      // .then((data)=>setCards(data))
      .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
  }, [getCards]);

  return {
    cards,
    handleDelete,
  };
};

export default useCards;
