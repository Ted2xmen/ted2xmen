import React from "react";

const Project = ({ data }) => {
  return (
    <div className="border h-full w-full space-y-2 rounded-lg border-slate-700 py-4 p-3">
      <div>
        <h1 className="page-title">{data.name}</h1>
      </div>
      <div>
        <p className="info-text"> {data.description}</p>
      </div>

      <div></div>
      <div>{data.homepage}</div>
      <div>{data.html_url}</div>
      <div>{data.stargazers_count}</div>
      <div>{data.watchers}</div>
      <div>{data.updated_at}</div>
      <div>{data.language}</div>
    </div>
  );
};

export default Project;
