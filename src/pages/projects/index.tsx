import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import CustomInput from "../../components/CustomInput/CustomInput.component";
import ProjectOverview from "../../components/ProjectOverview/ProjectOverview.component";
import { trpc } from "../../utils/trpc";
import { useSession } from "next-auth/react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  const { isLoading, data } = trpc.useQuery(
    ["user.userData", { id: session?.user?.id || "wekfweln" }],
    {
      onSuccess: (data) => {
        console.log(data, "roweifjwoelkfmwemlk");
      },
    }
  );

  return (
    <div className="min-w-7xl mx-auto max-w-7xl">
      <div className="mt-3 mb-8 w-full rounded-xl p-5 shadow-shadow1 md:w-3/4">
        <h1 className="text-xl font-medium text-primary md:text-3xl">
          Search your projects!
        </h1>
        <div className="mt-7 w-full md:w-3/4">
          <CustomInput
            label="Search projects by name"
            name="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            inputClass="text-text2 border-b-gray-500"
          />
        </div>
        <button className="mt-5 rounded-md bg-primary py-1 px-5 text-sm font-medium text-background">
          SEARCH
        </button>
      </div>
      <div className="flex w-full flex-col gap-5">
        <h1 className="text-xl font-medium text-gray-500 ">3 Projects </h1>
        {[...Array(5)].map((project, idx) => (
          <ProjectOverview key={idx} />
        ))}
      </div>
    </div>
  );
};

Projects.requireAuth = true;

export default Projects;
