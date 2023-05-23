import React from "react";
import moment from "moment";
import Link from "next/link";

const Github = ({ repo }) => {
  return (
    <>
      <div className="border h-full w-full space-y-2 rounded-lg border-slate-700 py-4 p-3">
        <Link
          target="_blank"
          className="flex justify-between"
          href={repo?.html_url}
        >
          <h1 className="pb-1 w-1/1 card-title custom-link">{repo?.name} ⭐</h1>
          <span className="text-xs text-slate-500">
            {moment(repo?.lastUpdate || repo?.updated_at).format("MM/YYYY")}
          </span>
        </Link>
        <p className="text-xs">{repo?.description?.slice(0, 140)}.</p>
      </div>
    </>
  );
};

export default Github;
