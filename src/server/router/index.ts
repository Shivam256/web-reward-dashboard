// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { projectRouter } from "./project.router";
import { userRouter } from "./user.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", protectedExampleRouter)
  .merge("project.", projectRouter)
  .merge("user.", userRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
