import React from "react";
import Image from "next/image";
import bookmarksfor from "./bookmarksfor.png";

const Project = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
      <div className="flex justify-center">
        <Image
          src={bookmarksfor.src}
          alt="bookmarks"
          className="object-cover shadow-lg"
          width={420}
          height={420}
          style={{ width: "100%", maxWidth: 420, height: "auto" }}
        />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <p className="text-lg text-center md:text-left">
          Here Is My Latest Project: <span>bookmarksfor.dev</span>
        </p>
        <p className="mt-4 px-2 py-1 bg-muted rounded text-center md:text-left">
          It is a platform where you can save handpicked articles and discover
          what your favorite people are reading.
        </p>
      </div>
    </section>
  );
};

export default Project;
