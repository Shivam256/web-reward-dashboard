import { z } from "zod";

export const UserIdInput = z.object({
  id: z.string(),
});
