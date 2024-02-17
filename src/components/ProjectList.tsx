import { useEffect, useState } from "react";
import { GITHUB_PROJECT_TAG, GITHUB_USERNAME, PROJECT_LENGTH } from "../consts";
import ProjectCard from "./shared/ProjectCard";
import Wrapper from "./shared/Wrapper";
import { StopwatchIcon } from "@radix-ui/react-icons";

const ProjectList = () => {
  const [filtered, setFiltered] = useState<any>();

  const getProjects = async () => {
    const github = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=1`
    );
    const projects = await github.json();

    setFiltered(
      projects
        ?.filter((f: any) => f.topics.includes(GITHUB_PROJECT_TAG))
        .slice(0, PROJECT_LENGTH)
    );
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (!filtered)
    return (
      <div className="my-5">
        <StopwatchIcon width={24} height={24} />
      </div>
    );

  return (
    <section className="flex p-3 rounded-lg justify-center space-y-6 flex-wrap text-sm">
      {filtered.map((project: any, i: number) => {
        return (
          <Wrapper key={i}>
            <ProjectCard project={project} />
          </Wrapper>
        );
      })}
    </section>
  );
};
export default ProjectList;
