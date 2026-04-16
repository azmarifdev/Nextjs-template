import type { Project } from "@/modules/project/types";

export function filterProjects(projects: Project[], query: string, statusFilter: string): Project[] {
  return projects.filter((project) => {
    const matchQuery = [project.name, project.owner].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchStatus = statusFilter === "all" ? true : project.status === statusFilter;
    return matchQuery && matchStatus;
  });
}

export function createProject(name: string, owner: string): Project {
  return {
    id: `p_${crypto.randomUUID()}`,
    name,
    owner,
    status: "planning"
  };
}

export function getProjectStats(projects: Project[], showing: number) {
  return {
    total: projects.length,
    active: projects.filter((project) => project.status === "active").length,
    planning: projects.filter((project) => project.status === "planning").length,
    showing
  };
}
