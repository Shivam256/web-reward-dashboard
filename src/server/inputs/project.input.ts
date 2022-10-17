import { z } from "zod";

export const CreateProjectNameInput = z.object({
  name: z.string(),
  ownerId: z.string(),
});
