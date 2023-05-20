import React from "react";
import Card from "./card";

const CardContainer = () => {
  return (
    <div className="space-y-4">
      {["1", "2", "3"].map(() => {
        return <Card />;
      })}
    </div>
  );
};

export default CardContainer;
