import { use, useState } from "react";
import type { Icard } from "../../Types/card";
import CardsSection from "./CardsSection";
import YourStack from "./YourStack";

interface CardsProps {
  cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
  const cards = use(cardsPromise);

  const [selectedCards, setSelectedCards] = useState<Icard[]>([]);

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

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] items-start">
        <CardsSection
          cards={cards}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />

        <YourStack
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />
      </div>
    </div>
  );
};

export default Cards;
