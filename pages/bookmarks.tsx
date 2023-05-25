import React from "react";
import Layout from "../layouts/layout";
import DataContainer from "../ui/container/dataContainer";

const Bookmarks = ({ bookmarks, repos }) => {
  return (
    <Layout title="Bookmarks">
      <div className="space-y-6">
        <p className="text-center text-lg max-w-lg mx-auto text-emerald-100 bg-emerald-800 p-4 rounded-md">
          I have been using <span className="font-bold">raindrop.io</span> for a
          long time to store and organize my bookmarks. Here, I share my
          favorite and useful articles and resources. I also added the
          repositories I liked on GitHub to the list.
        </p>
        <DataContainer
          type="list"
          title="Latest Stars"
          limit={4}
          data={repos}
        />

        <div className="spinnerX"></div>

        <DataContainer
          type="bookmark"
          title="Bookmarks"
          limit={5}
          data={bookmarks.items}
        />
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const github = await fetch("https://api.github.com/users/ted2xmen/starred");
  const repos = await github.json();

  const options = {
    headers: {
      Authorization: `Bearer ${process.env.RAINDROP_KEY}`,
    },
  };

  const raindrop = await fetch(process.env.RAINDROP_URL, options);
  const bookmarks = await raindrop.json();

  return {
    props: {
      bookmarks,
      repos,
    },
  };
};

export default Bookmarks;
