import React from "react";
import moment from "moment";

const Card = ({ data }) => {
  return (
    <div className="border h-36 mx-4 flex overflow-hidden rounded-lg border-slate-700 hover:border-green-400">
      <div className="block md:hidden bg-green-600 hover:bg-green-400 w-6"></div>
      <div className="w-1/1 hidden md:block">
        <img className="w-44 h-44" src={data.coverImage} alt={data.title} />
      </div>
      <div className="pt-2 mt-1 ml-4">
        <h1 className="pb-1 w-1/1 card-title">{data?.title}</h1>
        {/* <Link href={`/blog/${card.slug}`}>
          <span className="font-bold text-lg text-slate-500 underline cursor-pointer">
            ./{card.slug}
          </span>
        </Link> */}
        🚧 soon...
        <div className="mt-4 flex flex-col">
          <div className="ml-1 space-x-1">
            <span className="text-sm text-green-700">@Ted2xmen</span>
            <span className="text-xs text-slate-500">
              {moment(data.date).format("DD MMMM YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
