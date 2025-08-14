import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Endpoints } from "../Endpoints/const";
import type { IProject, IProjectFrontend } from "../Interfaces/IProject";
import { omit } from "../components/Helpers/Omit";
import { fetchWithAuth } from "../lib/fetchWithAuth";

const useProjects = () =>
  useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      return await fetchWithAuth(Endpoints.getProjects);
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

const useCreateOrUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: IProjectFrontend & { isEditing?: boolean }) => {
      const { isEditing, ...rest } = project
      const payload = isEditing ? rest : omit(rest, ['id'])
      const endpoint = project.isEditing ? Endpoints.updateProject : Endpoints.createProject;
      return await fetchWithAuth(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetchWithAuth(`${Endpoints.deleteProject}${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export { useProjects, useCreateOrUpdateProject, useDeleteProject };