import { getCollection } from "astro:content";
// export const allPosts = await getCollection("posts");
export const allPosts = await getCollection("blog");

// export const allPosts = unSortedPost?.sort(
//   (a, b) => b.data.pubDate - a.data.pubDate
// );
