import { createProtectedRouter } from "./context";
import * as Inputs from "../inputs/project.input";
import { uid } from "uid";
import { projectData } from "../../utils/data";
import { TRPCError } from "@trpc/server";

export const projectRouter = createProtectedRouter()
  .mutation("create", {
    input: Inputs.CreateProjectNameInput,
    async resolve({ ctx, input }) {
      const { name, ownerId } = input;
      console.log(name, ownerId);
      const img =
        projectData.images[
          Math.floor(Math.random() * projectData.images.length)
        ];
      const banner =
        projectData.images[
          Math.floor(Math.random() * projectData.banners.length)
        ];

      const project = await ctx.prisma.project.create({
        data: {
          name,
          ownerId,
          projectId: uid(5),
          image: img,
          bannerImage: banner,
        },
      });

      return {
        message: "Project created successfully",
        project,
      };
    },
  })
  .query("getOne", {
    input: Inputs.ProjectIdInput,
    async resolve({ ctx, input }) {
      const project = await ctx.prisma.project.findFirst({
        where: {
          projectId: input.id,
        },
        include: {
          owner: true,
          techStack: true,
          users: true,
        },
      });

      return {
        message: "project fetched successfully!",
        project,
      };
    },
  })
  .mutation("starterDetails", {
    input: Inputs.ProjectStarterDetailsInput,
    async resolve({ ctx, input }) {
      const tc = await ctx.prisma.techStack.create({
        data: {
          frontend: [input.frontend],
          backend: [input.backend],
        },
      });
      const project = await ctx.prisma.project.update({
        where: {
          projectId: input.id,
        },
        data: {
          projectKey: uid(12),
          techStackId: tc.id,
        },
      });
      if (!project) throw new TRPCError({ code: "NOT_FOUND" });
      return {
        message: "Project updated successfully!u",
      };
    },
  });
