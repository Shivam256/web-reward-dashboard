import { createRouter } from "./context";
import * as Inputs from "../inputs/project.input";
import { uid } from "uid";

export const projectRouter = createRouter().mutation("createByName", {
  input: Inputs.CreateProjectNameInput,
  async resolve({ ctx, input }) {
    const { name, ownerId } = input;
    console.log(name, ownerId);

    const project = await ctx.prisma.project.create({
      data: {
        name,
        ownerId,
        projectId: uid(5),
        projectKey: uid(12),
      },
    });

    return {
      name: "this is from trpc",
      project,
    };
  },
});
