import { server } from "../config";
import { Project } from "../typings";

export const fetchProject = async () => {
  const res = await fetch(`${server}/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
