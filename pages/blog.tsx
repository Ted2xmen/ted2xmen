import React from "react";
import Layout from "../layouts/layout";
import { getAllPosts } from "../lib/api";
import DataContainer from "../ui/container/dataContainer";

const Blog = ({ allPosts }) => {
  const posts = allPosts;

  return (
    <Layout title="Blog">
      <DataContainer type="post" title="Blog" limit={2} data={posts} />
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
