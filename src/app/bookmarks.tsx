import { Bookmark } from "@/lib/config";
import { getRecentBookmarks } from "@/lib/utils";
import { ArrowUpRight, Bookmark as BookmarkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Project from "./project";

const Bookmarks = async () => {
  const bookmarks = await getRecentBookmarks();

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
      <div className="grid grid-cols-1 mx-8 gap-4">
        {bookmarks.map((item: Bookmark, index: number) => (
          <BookmarkCard key={item.title + index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Bookmarks;

const BookmarkCard = ({ item, index }: { item: Bookmark; index: number }) => {
  return (
    <Link
      key={item.title + index}
      href={`${item.url}?ref=ted2xmen.dev`}
      target="_blank"
      className="group flex items-center hover:bg-muted p-2 w-full justify-between gap-2"
      rel="noopener noreferrer">
      <div className="flex items-center gap-2">
        <span className="block group-hover:hidden">
          <BookmarkIcon className="w-4 h-4" />
        </span>
        <span className="hidden group-hover:block">
          <ArrowUpRight className="w-4 h-4" />
        </span>
        <p className="p-1 text-wrap line-clamp-1">{item.title}</p>
      </div>
    </Link>
  );
};
