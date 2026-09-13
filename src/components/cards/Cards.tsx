import React, { use, useState } from "react";
import type { Icard } from "../../Types/card";
import CardsSection from "./CardsSection";

interface CardsProps {
  cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
  const cards = use(cardsPromise);
  const [stackType, setStackType] = useState("selected");
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

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] items-start ">
        <CardsSection cards={cards} />
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
          <p className="mt-1 text-sm text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
            <span className="text-sm text-slate-300">Your stack is empty.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
