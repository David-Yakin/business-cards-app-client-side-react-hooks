import React, { useEffect, useState } from "react";
import PageHeader from "../component/PageHeader";
import Cards from "../../componenets/cards/Cards";
import useCards from "../../hooks/useCards";
import { generateCards } from "../../fixture/cardsFixture";
import Search from "../../componenets/search/Search";

const HomePage = () => {
  const { cards, handleDelete } = useCards(generateCards(6));
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
      <Search onSearch={setSearchTerm} placeholder="Search Cards..." />
      <Cards cards={cardsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
