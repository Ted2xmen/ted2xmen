import React from "react";
import Card from "../cards/card";
import Project from "../cards/project";
import Bookmark from "../cards/bookmark";
import List from "../cards/list";

const DataContainer = ({ limit, data, title, type }) => {
  const renderCardByType = (item: any, index: number) => {
    switch (type) {
      case "post":
        return <Card key={index} data={item} />;
      case "bookmark":
        return <Bookmark key={index} data={item} />;
      case "project":
        return <Project key={index} data={item} />;
      case "list":
        return <List key={index} data={item} />;
      default:
        return <Card key={index} data={item} />;
    }
  };

  return (
    <div>
      <h4 className="p-3 mb-3 font-bold text-slate-100"> {title} </h4>
      {type === "list" && (
        <div className="gap-3 md:flex rounded-md">
          <div className="w-full">
            {data?.slice(0, limit).map((item: any, index: number) => {
              return renderCardByType(item, index);
            })}
          </div>
        </div>
      )}

      {type !== "list" && (
        <div
          className={`${
            type === "project"
              ? "flex w-full flex-wrap gap-3"
              : "flex flex-col gap-5"
          }`}
        >
          {data?.slice(0, limit).map((item: any, index: number) => {
            return renderCardByType(item, index);
          })}
        </div>
      )}
    </div>
  );
};

export default DataContainer;
