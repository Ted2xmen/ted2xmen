import React, { useState } from "react";
import Layout from "../layouts/layout";
import DataContainer from "../ui/container/dataContainer";
import Link from "next/link";

const Projects = ({ projects }) => {
  const [filtered, setFiltered] = useState(
    projects?.filter((f) => f.topics.includes("ted2xmen"))
  );

  return (
    <Layout title="Projects">
      <p className="text-center  text-lg max-w-lg my-5 mx-auto text-emerald-100 bg-emerald-800 p-4 rounded-md">
        {" "}
        The data on this page comes from Github API. I filtered and listed my
        projects for which I added the{" "}
        <span className="text-orange-400"> "ted2xmen"</span> tag. For the
        project images, I assigned the project id to the images.
      </p>

      <DataContainer type="project" limit={2} data={filtered} title="" />

      <div className="mx-auto flex flex-col justify-center mt-8 items-center">
        <Link href="https://github.com/Ted2xmen" target="_blank">
          <h3 className="custom-link ">Here is my other projects → </h3>
        </Link>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const github = await fetch(
    "https://api.github.com/users/ted2xmen/repos?per_page=100&page=1"
  );
  const projects = await github.json();

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
