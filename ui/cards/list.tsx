import Link from "next/link";
import React from "react";

const List = ({ data }) => {
  return (
    <div className="border-b border-slate-800 flex items-center justify-between space-x-4 rounded-md px-3 py-3 w-full">
      <div className="space-x-3">
        <Link className="custom-link" href={data.html_url}>
          {data.name || data.title}
        </Link>
        <span className="text-xs">{data.license?.name.slice(0, 3)}</span>

        <span className="ml-4 text-sm">★ {data.stargazers_count}</span>
      </div>
      <div className="text-xs space-x-3">
        <span>{data.language}</span>
      </div>
    </div>
  );
};

export default List;
