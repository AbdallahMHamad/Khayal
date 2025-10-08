import React from "react";

export default function DescriptionCard({ title, description }) {
  return (
    <div className="p-6 rounded-xl bg-[#12111f] border border-purple-500/20 hover:border-purple-500 transition-all duration-300 shadow-md">
      <h3 className="text-purple-300 font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
