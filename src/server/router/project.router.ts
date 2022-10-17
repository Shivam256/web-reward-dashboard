import { createRouter } from "./context";
import * as Inputs from "../inputs/project.input";

export const projectRouter = createRouter().mutation("createByName", {
  input: Inputs.CreateProjectNameInput,
  async resolve({ ctx, input }) {
    const { name, ownerId } = input;
    console.log(name, ownerId);

    const project = await ctx.prisma.project.create({
      data: {
        name,
        ownerId,
      },
    });

    return {
      name: "this is from trpc",
      project,
    };
  },
});
