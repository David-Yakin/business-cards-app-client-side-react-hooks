import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Search from "../../componenets/search/Search";
import useCards from "../hooks/useCards";
import PageHeader from "../../componenets/PageHeader";
import { noop } from "bootstrap/js/src/util";
import { CreateCard } from "./CreateCard";

const CardsPage = () => {
  const { cards, handleDelete } = useCards();
  const [searchTerm, setSearchTerm] = useState("");
  const [cardsToShow, setCardsToShow] = useState(cards);

  useEffect(() => {
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCardsToShow(filtered);
  }, [cards, searchTerm]);

  return (
    <div className="container">
      <PageHeader
        title="Business Card App"
        subTitle="Here you will find business cards"
      />
      <CreateCard />
      <Search onSearch={setSearchTerm} placeholder="Search Cards..." />
      <Cards cards={cardsToShow} onDelete={handleDelete || noop} />
    </div>
  );
};

export default CardsPage;
