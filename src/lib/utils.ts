import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Parser from "rss-parser";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rssParser = async (url: string) => {
  const parser = new Parser();
  const parsedFeed = await parser?.parseURL(url);
  return parsedFeed;
};

export const getRecentBookmarks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/bookmarks`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data?.results;
  } catch (error) {
    console.error("Failed to fetch recent bookmarks:", error);
    return [];
  }
};
