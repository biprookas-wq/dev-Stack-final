import React, { use } from "react";
import type { Icard } from "../../Types/card";
import CardsSection from "./CardsSection";

interface CardsProps {
  cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
  console.log(cardsPromise);
  const cards = use(cardsPromise);

  console.log(cards, "Cards");
  return (
    <div className="flex flex-col space-y-5 container mx-auto p-4">
      <div>
        <h2 className="text-3xl font-bold">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-bold">
            Technologies
          </span>
        </h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <CardsSection cards={cards} />
    </div>
  );
};

export default Cards;
