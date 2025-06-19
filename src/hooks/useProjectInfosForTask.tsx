import { useProjects } from "./useProjects";

const useProjectInfosForTask = (projectKey: string) => {
  const { data: projects } = useProjects();

  if (!projects) return undefined;

  const project = projects.find(
    (p) => p.id === projectKey
  );
  return {
    title: project?.title,
    color:  project?.projectColor
  };
};

export { useProjectInfosForTask };