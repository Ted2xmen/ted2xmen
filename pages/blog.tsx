import React from "react";
import Layout from "../layouts/layout";
import { getAllPosts } from "../lib/api";
import CardContainer from "../components/blog/cardContainer";

const Blog = ({ allPosts }) => {
  const posts = allPosts;

  return (
    <Layout>
      <CardContainer cards={posts} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

export default Blog;
