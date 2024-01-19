import React from "react";

export const Tile = ({ name, description }) => {

  const descriptionList = Object.values(description);

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionList.map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
