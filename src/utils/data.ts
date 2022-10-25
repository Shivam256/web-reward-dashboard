import { ProjectData, TechStack } from "../interfaces/project.interface";

export const projectData: ProjectData = {
  banners: [
    "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80",
    "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80",
    "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80",
    "https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ],
  images: [
    "https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80",
    "https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1559139011-7ecdc76280aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1520642197828-b053b701d590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    "https://images.unsplash.com/photo-1574352067721-72d5913bd35c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ],
};

export const techStack: TechStack = {
  frontend: [
    {
      id: "FREACTJS",
      name: "React JS",
      iconName: "vscode-icons:file-type-reactjs",
    },
    {
      id: "FANGULARJS",
      name: "Angular JS",
      iconName: "logos:angular-icon",
      disabled: true,
    },
    {
      id: "FVUEJS",
      name: "Vue JS",
      iconName: "logos:vue",
      disabled: true,
    },
  ],
  backend: [
    {
      id: "BNODEJS",
      name: "Node JS",
      iconName: "fa-brands:node-js",
    },
    {
      id: "BPYTHON",
      name: "Python",
      iconName: "logos:python",
      disabled: true,
    },
    {
      id: "BJAVA",
      name: "Java",
      iconName: "logos:java",
      disabled: true,
    },
  ],
};

export const techMap = {
  FREACTJS: {
    id: "FREACTJS",
    name: "React JS",
    iconName: "vscode-icons:file-type-reactjs",
  },
  BNODEJS: {
    id: "BNODEJS",
    name: "Node JS",
    iconName: "fa-brands:node-js",
  },
  BPYTHON: {
    id: "BPYTHON",
    name: "Python",
    iconName: "logos:python",
  },
};
