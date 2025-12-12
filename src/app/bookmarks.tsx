import Link from "next/link";
import React from "react";
import Project from "./project";

const Bookmarks = async () => {

  return (
    <section className="flex flex-col gap-4 max-w-5xl mx-auto">
      <Project />
      <p className="mt-4 bg-muted mx-8 p-4 text-center">
        You can check out my readings{" "}
        <Link
          className="text-blue-500 hover:underline break-all"
          href="https://bookmarksfor.dev/profile/Ted2xmen"
          target="_blank"
          rel="noopener noreferrer">
          bookmarksfor.dev/profile/ted2xmen
        </Link>
      </p>
   
    </section>
  );
};

export default Bookmarks;


