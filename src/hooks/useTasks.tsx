import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import type { ITask, ITaskFrontend } from "../Interfaces/ITask";
import { omit } from "../components/Helpers/Omit";
import { fetchWithAuth } from "../lib/fetchWithAuth";

export const useTasks = () =>
  useQuery<ITask[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.getTasks}`);
      if (!res.ok) throw new Error("Failed to fetch tasks");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: ITaskFrontend & { isEditing?: boolean }) => {
        const {isEditing, ...rest} = task
        const payload = isEditing ? rest : omit(rest, ['id'])
        const endpoint = task.isEditing ? Endpoints.updateTask : Endpoints.createTask;
        const res = await fetchWithAuth(`${BackendUrl}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to submit task");
        return res.json();
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.deleteTask}${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to delete task");
      console.log(res);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
