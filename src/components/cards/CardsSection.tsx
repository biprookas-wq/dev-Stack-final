import type { Icard } from "../../Types/card";
import SelectedItem from "./SelectedItem";

interface CardsSectionProps {
  cards: Icard[];
  selectedCards: Icard[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Icard[]>>;
}

const CardsSection = ({
  cards,
  selectedCards,
  setSelectedCards,
}: CardsSectionProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => {
        return (
          <SelectedItem
            key={card.id}
            card={card}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
          />
        );
      })}
    </div>
  );
};

export default CardsSection;