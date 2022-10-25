import { createProtectedRouter } from "./context";
import * as Inputs from "../inputs/user.inputs";
import { uid } from "uid";

export const userRouter = createProtectedRouter()
  .query("userData", {
    input: Inputs.UserIdInput,
    async resolve({ ctx, input }) {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: input.id,
        },
        include: {
          projects: true,
        },
      });
      
      return {
        msg: "User Project fetched ",
        user: user,
      };
    },
  })
  .mutation("generateKeys", {
    input: Inputs.UserIdInput,
    async resolve({ ctx, input }) {

      const user = await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          apiKey: uid(12),
          apiSecret: uid(16),
        },
      });

      return {
        msg: "Keys generated successfully!",
      };
    },
  });
