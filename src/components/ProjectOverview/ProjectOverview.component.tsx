import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Project } from "../../interfaces/project.interface";

type ProjectProps = {
  project: Project;
  key: number;
};

const ProjectOverview = ({ project }: ProjectProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/projects/wekslfwkel");
  };

  return (
    <div className="h-28 w-full rounded-xl p-2 shadow-shadow1 transition-all duration-200 ease-in hover:shadow-shadow2 md:h-40 md:w-3/4">
      <div className="flex h-full w-full gap-6">
        <img
          src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt=""
          className="h-full w-24 rounded-xl md:w-32"
        />
        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-medium text-text1 md:text-3xl">
              {project.name}
            </h1>
            <Icon icon="akar-icons:star" />
          </div>
          <div className="md:text-md flex w-full items-center  gap-2 text-sm md:gap-5">
            <div className="flex items-center gap-1">
              <Icon icon="gridicons:multiple-users" /> 120
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="jam:coin-f" />2
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex ">
            <h1 className="text-sm font-semibold">KEY:</h1>
            <div className=" text-sm font-normal text-gray-400 ">
              {project.projectKey || "-"}
            </div>
          </div>
          <div className="flex w-full justify-end">
            <button
              className="flex items-center gap-2 rounded-md bg-primary py-2 px-5 text-xs text-white md:px-16"
              onClick={handleClick}
            >
              OPEN DETAILS <Icon icon="akar-icons:link-out" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
