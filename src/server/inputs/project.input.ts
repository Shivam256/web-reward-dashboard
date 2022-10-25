import { z } from "zod";

export const CreateProjectNameInput = z.object({
  name: z.string(),
  ownerId: z.string(),
});

export const ProjectIdInput = z.object({
  id: z.string(),
});

export const ProjectStarterDetailsInput = z.object({
  frontend: z.string(),
  backend: z.string(),
  id: z.string(),
});
