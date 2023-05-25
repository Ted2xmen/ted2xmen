import Image from "next/image";
import React from "react";
import Link from "next/link";
import CardTitle from "../title/CardTitle";

const Project = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="rounded-xl h-full  overflow-hidden m-2 flex border border-slate-700 flex-col space-y-2"
        style={{ maxWidth: "310px" }}
      >
        <Link href={data.html_url} aria-label={`Link to ${data.name}`}>
          <Image
            alt={data.name}
            src={`/../public/github/${data.id}.png`}
            className="object-cover rounded-t-lg object-top md:h-32 lg:h-44"
            width={580}
            height={306}
          />
        </Link>
        <div className="flex  text-center text-sm items-center justify-center">
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-slate-800 border-l-2 custom-link hover:bg-slate-900 w-full"
          >
            Repository
          </a>
          <a
            href={data.homepage}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-slate-800 border-r-2 hover:bg-slate-900 custom-link w-full"
          >
            Preview
          </a>
        </div>
        <div className="border flex border-green-500  text-slate-300 text-xs p-2 rounded-md m-1">
          {data.language}
        </div>
        <div className="flex flex-col  space-y-3 mx-3 -m-5">
          <div className="m-3 space-y-3">
            <CardTitle>{data.name}</CardTitle>
          </div>

          <div className="mx-3">
            <p className="text-sm"> {data.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
