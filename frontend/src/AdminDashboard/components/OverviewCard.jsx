import React from "react";

const OverviewCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex items-center gap-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold text-green-600">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
