import React from "react";
import Github from "./github";

const GithubContainer = ({ repos }) => {
  return (
    <div className="flex flex-col gap-6">
      {repos?.slice(0, 5).map((repo: any, index: number) => {
        return <Github key={index} repo={repo} />;
      })}
    </div>
  );
};

export default GithubContainer;
