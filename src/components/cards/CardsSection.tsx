import React from "react";
import type { Icard } from "../../Types/card";
import SelectedItem from "./SelectedItem";

const CardsSection = ({ cards }: { cards: Icard[] }) => {
  console.log(cards, "CardsSection");
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card: Icard) => {
        return <SelectedItem key={card.id} card={card} />;
      })}
    </div>
  );
};

export default CardsSection;
