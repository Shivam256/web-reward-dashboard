export interface Project {
  id: string;
  name: string;
  ownerId: string;
  image: string | null;
  bannerImage: string | null;
  projectKey: string | null;
  projectId: string | null;
}

export interface ProjectData {
  banners: string[];
  images: string[];
}

export interface tech {
  id: string;
  name: string;
  iconName: string;
  disabled?: boolean;
}

export interface TechStack {
  frontend: tech[];
  backend: tech[];
}

export interface ProjectUser {
  userId: string;
  id: string;
  name: string;
  clicks: number;
  duration: number;
  projectId: string | null;
}
