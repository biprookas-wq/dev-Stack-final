import React from "react";
import type { Icard } from "../../Types/card";

const SelectedItem = ({ card }: { card: Icard }) => {
  const badgeStyles: Record<string, string> = {
    Popular: "border-blue-200 bg-blue-50 text-blue-600",
    Versatile: "border-emerald-200 bg-emerald-50 text-emerald-600",
    Fast: "border-orange-200 bg-orange-50 text-orange-600",
    "SSR / Edge": "border-purple-200 bg-purple-50 text-purple-600",
    Standard: "border-emerald-200 bg-emerald-50 text-emerald-600",
    "Top SQL": "border-blue-200 bg-blue-50 text-blue-600",
  };

  return (
    <div className="group w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={card.icon}
            alt={card.name}
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <span
          className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
            badgeStyles[card.badge] ||
            "border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          {card.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-7 text-2xl font-bold tracking-tight text-slate-900">
        {card.name}
      </h2>

      {/* Description */}
      <p className="mt-3 min-h-[72px] text-[15px] leading-7 text-slate-500">
        {card.description}
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-slate-100"></div>

      {/* Info */}
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600">
          {card.category}
        </span>

        <span className="text-sm font-medium text-slate-500">
          {card.difficulty}
        </span>

        <span className="text-sm font-bold text-slate-700">
          <span className="mr-1 text-amber-400">★</span>
          {card.rating}
        </span>
      </div>

      {/* Button */}
      <button className="mt-6 w-full rounded-xl bg-slate-950 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]">
        Add to Stack
      </button>
    </div>
  );
};

export default SelectedItem;