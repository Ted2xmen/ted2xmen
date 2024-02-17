import React from "react";
import Wrapper from "./shared/Wrapper";
import ArticlePreview from "./shared/ArticlePreview";
import { TargetIcon } from "@radix-ui/react-icons";

const projectData = {
  data: [
    {
      data: {
        title: "project: arastirman",
        tags: ["AstroJS", "Starlight", "TailwindCSS"],
        pubDate: "2021-08-12",
      },
      slug: "learn-typescript-node-js",
    },
    {
      data: {
        title: "bookmarksfor",
        tags: ["NextJS"],
        pubDate: "2021-08-12",
      },
      slug: "learn-python",
    },
  ],
};

const FeaturedProjects = ({ data }: any) => {
  return (
    <section className="grid gap-2 h-44 grid-cols-1 md:grid-cols-3 items-between">
      <Wrapper>
        <ul className="text-main/70  space-y-3">
          <li className="flex items-center gap-2">
            <input type="checkbox" className="" checked />
            <label htmlFor="">Learn Typescript / Node JS</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="" />
            <label htmlFor="">Learn Python</label>
          </li>
        </ul>
      </Wrapper>
      <div className="gap-2 col-span-2  flex flex-col p-4">
        {projectData.data.map((article: any, id: any) => (
          <ArticlePreview key={id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
