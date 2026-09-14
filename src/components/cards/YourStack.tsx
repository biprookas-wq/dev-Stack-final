import type { Icard } from "../../Types/card";

interface YourStackProps {
  selectedCards: Icard[];
  setSelectedCards: React.Dispatch<React.SetStateAction<Icard[]>>;
}

const YourStack = ({
  selectedCards,
  setSelectedCards,
}: YourStackProps) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        Your Stack
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {selectedCards.length === 0
          ? "No technologies selected yet."
          : `${selectedCards.length} ${
              selectedCards.length === 1 ? "Technology" : "Technologies"
            } Selected`}
      </p>

      {selectedCards.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <span className="text-sm text-slate-300">
            Your stack is empty.
          </span>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-2">
          {selectedCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={card.icon}
                  alt={card.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {card.name}
                  </h4>

                  <p className="text-xs text-slate-400">
                    {card.badge}
                  </p>
                </div>
              </div>

              <button
                className="text-2xl text-slate-400 hover:text-red-500"
                onClick={() => {
                  setSelectedCards(
                    selectedCards.filter((item) => item.id !== card.id)
                  );
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedCards.length > 0 && (
        <button
          onClick={() => setSelectedCards([])}
          className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;