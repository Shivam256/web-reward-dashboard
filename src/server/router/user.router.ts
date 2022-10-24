import { createRouter } from "./context";
import * as Inputs from "../inputs/user.inputs";
import { uid } from "uid";

export const userRouter = createRouter()
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

      console.log(user, "this is the user shuiiiiii!");
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
