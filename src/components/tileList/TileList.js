import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {

  if (!data) {
    return null; // or return some default content or an error message
  }

  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} name={item.name} description={item.description} />
      ))}
    </div>
  );
};
