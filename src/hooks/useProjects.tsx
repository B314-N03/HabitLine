import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import type { IProject, IProjectFrontend } from "../Interfaces/IProject";
import { omit } from "../components/Helpers/Omit";

export const useProjects = () =>
  useQuery<IProject[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch(`${BackendUrl}${Endpoints.getProjects}`);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (project: IProjectFrontend & { isEditing?: boolean }) => {
        const {isEditing, ...rest} = project
        const payload = isEditing ? rest : omit(rest, ['id'])        
        const endpoint = project.isEditing ? Endpoints.updateProject : Endpoints.createProject;
        const res = await fetch(`${BackendUrl}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to submit project");
        return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
