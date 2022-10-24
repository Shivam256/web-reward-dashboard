import { Project } from "./project.interface";

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  apiKey: string | null;
  apiSecret: string | null;
  projects: Project[];
}
