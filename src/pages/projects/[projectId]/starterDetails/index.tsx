import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { trpc } from "../../../../utils/trpc";
import { useRouter } from "next/router";
import { techStack } from "../../../../utils/data";
import TechSelect from "../../../../components/TechSelect/techSelect.component";
import CustomButton from "../../../../components/CustomButton/customButton.component";

const ProjectStarterDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [frontEndStack, setFrontEndStack] = useState<string>("");
  const [backendStack, setBackendStack] = useState<string>("");

  const { data, isLoading } = trpc.useQuery(
    ["project.getOne", { id: projectId?.toString() || "hhe" }],
    {
      onSuccess: (data) => {
        console.log(data, "he he he , see here i am");
      },
    }
  );

  const starterMutation = trpc.useMutation(["project.starterDetails"], {
    onSuccess: (data) => {
      console.log(data);
      router.push(`/projects/${projectId}`);
    },
  });

  const handleClick = () => {
    if (frontEndStack === "" || backendStack === "") {
      alert("Please fill the fields");
      return;
    }
    const data = {
      frontend: frontEndStack,
      backend: backendStack,
      id: projectId?.toString() || "",
    };
    starterMutation.mutate(data);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="min-w-7xl mx-auto max-w-7xl gap-8">
      <h1 className="text-3xl font-semibold text-primary">
        Lets set up your project so that you are good to go!
      </h1>
      <div className="mt-8  w-3/4 ">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl font-medium">
            Select your projects tech stack!
          </h1>
          <div className="w-full rounded-md py-3 px-4 shadow-shadow1">
            <h1 className="mb-3 text-lg font-medium">Frontend:</h1>
            <div className="flex gap-8">
              {techStack.frontend.map((tech) => (
                <TechSelect
                  tech={tech}
                  key={tech.id}
                  select={() => {
                    setFrontEndStack(tech.id);
                  }}
                  selected={tech.id === frontEndStack}
                />
              ))}
            </div>
          </div>
          <div className="w-full rounded-md py-3 px-4 shadow-shadow1">
            <h1 className="mb-3 text-lg font-medium">Backend:</h1>
            <div className="flex gap-8">
              {techStack.backend.map((tech) => (
                <TechSelect
                  tech={tech}
                  key={tech.id}
                  select={() => {
                    setBackendStack(tech.id);
                  }}
                  selected={tech.id === backendStack}
                />
              ))}
            </div>
          </div>
          <CustomButton
            onClick={handleClick}
            className="text-md mt-5"
            isLoading={starterMutation.isLoading}
          >
            FINISH
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

ProjectStarterDetails.requireAuth = true;

export default ProjectStarterDetails;
