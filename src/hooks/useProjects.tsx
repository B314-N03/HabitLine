import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import type { IProject, IProjectFrontend } from "../Interfaces/IProject";
import { omit } from "../components/Helpers/Omit";
import { fetchWithAuth } from "../lib/fetchWithAuth";

const useProjects = () =>
  useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      return await fetchWithAuth(`${BackendUrl}${Endpoints.getProjects}`,);
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

const useCreateOrUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: IProjectFrontend & { isEditing?: boolean }) => {
        const {isEditing, ...rest} = project
        const payload = isEditing ? rest : omit(rest, ['id'])        
        const endpoint = project.isEditing ? Endpoints.updateProject : Endpoints.createProject;
        return await fetchWithAuth(`${BackendUrl}${endpoint}`, {
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

export {useProjects, useCreateOrUpdateProject};