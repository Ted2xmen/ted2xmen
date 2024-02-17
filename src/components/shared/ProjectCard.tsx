import { CodeIcon, CalendarIcon } from "@radix-ui/react-icons";
import moment from "moment";
import React from "react";

const ProjectCard = ({ project }: any) => {
  return (
    <div className="p-3 flex flex-col space-y-5">
      <div className="flex justify-between items-center">
        <a
          className="text-main text-lg flex items-center gap-2"
          href={project.html_url}>
          {project.name}
        </a>
        <div className="flex items-center gap-2 text-main/50">
          <CodeIcon />
          {project.language}
        </div>
      </div>

      <div className="flex justify-start text-main/70 items-center">
        <div> {project.description} </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-main/50">
          <CalendarIcon />
          {moment(project.pushed_at).startOf("day").fromNow()}
        </div>

        <a
          href={project.homepage}
          target="_blank"
          rel="noreferrer"
          className="text-primary">
          Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
