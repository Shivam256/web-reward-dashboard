import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Project = () => {
  return (
    <div className="min-w-7xl mx-auto flex max-w-7xl gap-8">
      <div className="relative h-fit w-full rounded-2xl pb-10 shadow-shadow1 md:w-3/4">
        <img
          src="https://images.unsplash.com/photo-1493210977798-4f655ac200a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
          alt=""
          className="h-64 w-full rounded-2xl object-cover"
        />
        <div className="overlay absolute top-0 flex h-64 w-full items-end justify-start gap-3 rounded-2xl bg-gradient-to-t from-black px-5 opacity-80">
          <img
            src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
            alt=""
            className="h-32 w-32 translate-y-16 rounded-full border-8 border-white md:h-40 md:w-40 md:translate-y-20"
          />
          <h1 className="mb-2 text-3xl font-bold text-white opacity-80">
            #77681973
          </h1>
        </div>
        <div className="flex w-full justify-end p-2">
          <Icon icon="akar-icons:edit" width="30px" height="30px" />
        </div>
        <div className="mt-10 w-full p-2 px-5">
          <h1 className="text-xl font-medium">Workfloe</h1>
          <div className="mt-2 flex w-full gap-5">
            <div className="rounded-lg border-2 border-primary p-2 px-4 text-sm text-primary">
              120 users
            </div>
            <div className="rounded-lg border-2 border-primary p-2 px-4 text-sm text-primary">
              8 reward models
            </div>
          </div>
        </div>
      </div>
      <div className="h-44 flex-1 rounded-xl p-4 shadow-shadow1">hello</div>
    </div>
  );
};

Project.requireAuth = true;

export default Project;
