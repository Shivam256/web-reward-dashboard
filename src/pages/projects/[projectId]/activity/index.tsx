import React, { useState } from "react";
import { trpc } from "../../../../utils/trpc";
import { useRouter } from "next/router";

const ProjectUserActivityOverview = ({ user }) => {
  const getRewardValue = (clicks = 0, duration = 0) => {
    return Math.floor(clicks / 100) + Math.floor(duration / 60);
  };
  return (
    <div className="flex w-full justify-between">
      <div className="w-1/5">{user.userId || user.id}</div>
      <div className="w-1/5">{user.name || "-"}</div>
      <div className="w-1/5">{user.clicks || 0}</div>
      <div className="w-1/5">{(user.duration / 60).toFixed(2) || "-"}</div>
      <div className="w-1/5">{getRewardValue(user.clicks, user.duration)}</div>
    </div>
  );
};

const ProjectActivity = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const { data, isLoading } = trpc.useQuery(
    ["project.getOne", { id: projectId?.toString() || "hhe" }],
    {
      onSuccess: (data) => {
        console.log(data, "he he he , see here i am");
        if (!data.project?.projectKey) {
          router.push(`/projects/${projectId}/starterDetails`);
        }
      },
    }
  );

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="min-w-7xl mx-auto max-w-7xl gap-8">
      <h1 className="text-2xl font-semibold">
        User activity for project {data.project.name}
      </h1>
      <div className="mt-8 h-fit w-full rounded-lg p-3 shadow-shadow1">
        <div className="mb-5 flex w-full justify-between">
          <div className="text-md w-1/5 font-medium">USER ID</div>
          <div className="text-md w-1/5 font-medium">USERNAME</div>
          <div className="text-md w-1/5 font-medium">CLICKS</div>
          <div className="text-md w-1/5 font-medium">DURATION(min)</div>
          <div className="text-md w-1/5 font-medium">REWARD COINS</div>
        </div>
        <div className="flex w-full flex-col gap-3">
          {data?.project?.users.map((user, idx) => (
            <ProjectUserActivityOverview user={user} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectActivity.requireAuth = true;

export default ProjectActivity;
