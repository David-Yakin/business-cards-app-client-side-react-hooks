import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Search from "../components/search/Search";
import useCards from "./useCards";
import PageHeader from "../pages/PageHeader";

const CardsPage = () => {
  const { cards, handleDelete } = useCards();
  const [searchTerm, setSearchTerm] = useState("");
  const [cardsToShow, setCardsToShow] = useState(cards);

  useEffect(() => {
    // eslint-disable-next-line max-len
    const filtered = cards.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setCardsToShow(filtered);
  }, [cards, searchTerm]);

  return (
      <div className="container">
          <PageHeader
            title="Business Card App"
            subTitle="Here you will find business cards"
          />
          <Search onSearch={setSearchTerm} placeholder="Search Cards..." />
          <Cards cards={cardsToShow} onDelete={handleDelete} />
      </div>
  );
};

export default CardsPage;
