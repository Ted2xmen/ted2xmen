import { rssParser } from "@/lib/utils";
import { Bookmark, CONSTANTS } from "@/lib/config";
import { NextResponse } from "next/server";

type Feed = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
};

export async function GET() {
  try {
    const rssFeed = await rssParser(CONSTANTS.myFeed);
    const results = generateBookmarkModel(rssFeed?.items as Feed[]).slice(
      0,
      CONSTANTS.limit
    );

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 }
    );
  }
}

const generateBookmarkModel = (items: Feed[]): Bookmark[] => {
  if (!items) return [];

  return items.map((item: Feed) => ({
    title: item.title,
    description: item.contentSnippet,
    content: item.content,
    url: item.link,
    date: item.pubDate,
  }));
};
