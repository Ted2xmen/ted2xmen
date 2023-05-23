import Link from "next/link";
import React from "react";

const Rainddrop = ({ bookmark }) => {
  return (
    <div>
      <Link target="_blank" href={bookmark?.link}>
        <h2 className="text-md xl:text-lg text-slate-100 hover:text-slate-400">
          {bookmark?.title}
        </h2>
      </Link>
    </div>
  );
};

export default Rainddrop;
