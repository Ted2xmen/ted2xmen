import React from "react";
import Rainddrop from "./rainddrop";

const RainddropContainer = ({ bookmarks }) => {
  return (
    <div>
      {bookmarks?.map((bookmark: any, index: number) => {
        return <Rainddrop key={index} bookmark={bookmark} />;
      })}
    </div>
  );
};

export default RainddropContainer;
