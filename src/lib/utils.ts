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

