import React from "react";
import Card from "./card";

const CardContainer = ({ cards }) => {
  return (
    <div className="flex flex-col gap-6">
      {cards?.map((card: any, index: number) => {
        return <Card key={index} card={card} />;
      })}
    </div>
  );
};

export default CardContainer;
