import React, { useState } from "react";
import Layout from "../layouts/layout";
import DataContainer from "../ui/container/dataContainer";
import Link from "next/link";
import Loader from "../ui/loader";

const Projects = ({ projects }) => {
  const [filtered, setFiltered] = useState(
    projects?.filter((f) => f.topics.includes("ted2xmen"))
  );

  return (
    <Layout title="Projects">
      <div className="info-text space-y-6 px-2 mt-8 md:px-12">
        <p className="mt-2">
          I mostly use <span className="text-slate-300">Next.js</span> for my
          web development projects. For styling, I use various libraries, but I
          tend to rely on Styled Components,
          <span className="text-purple-700"> Tailwind</span>, and Ant Design. I
          enjoy using <span className="text-blue-600">TypeScript</span> for type
          safety and better code organization.
        </p>
      </div>

      <div className="mx-auto space-x-6 flex justify-center my-4 items-center">
        <Link href="https://github.com/Ted2xmen" target="_blank">
          <h3 className="custom-link ">Here is my other projects</h3>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
      </div>

      <DataContainer type="project" limit={2} data={filtered} title="" />
      <Loader />
      <p className="text-center  text-lg max-w-lg my-5 mx-auto text-emerald-100 bg-emerald-800 p-4 rounded-md">
        {" "}
        The data on this page comes from Github API. I filtered and listed my
        projects for which I added the{" "}
        <span className="text-orange-400"> "ted2xmen"</span> tag. For the
        project images, I assigned the project id to the images.
      </p>
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
