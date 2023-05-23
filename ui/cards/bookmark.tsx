import Link from "next/link";
import React from "react";
import { customDateFormat } from "../../lib/functions";
import CardTitle from "../title/CardTitle";

const Bookmark = ({ data }) => {
  return (
    <div className="border  p-6  flex-wrap justify-center w-full h-full overflow-hidden rounded-lg border-slate-700 hover:border-green-400">
      <div>
        <CardTitle>{data?.title}</CardTitle>
        <Link target="_blank" href={data?.link}>
          <div className="custom-link">{data.domain}</div>
        </Link>

        <div className="hidden md:block">
          <p className="text-md my-1">{data.excerpt.slice(0, 90)}...</p>
        </div>

        <div className="flex justify-between my-4">
          <div>
            {data.tags.map((tag: string, key: number) => {
              return (
                <span
                  className="border border-green-500  text-slate-300 cursor-pointer text-xs p-2 rounded-md m-1"
                  key={key}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div>{customDateFormat(data.lastUpdate)}</div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
