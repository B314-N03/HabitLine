import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import type { ITask, ITaskFrontend } from "../Interfaces/ITask";
import { omit } from "../components/Helpers/Omit";

export const useTasks = () =>
  useQuery<ITask[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch(`${BackendUrl}${Endpoints.getTasks}`);
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
        const res = await fetch(`${BackendUrl}${endpoint}`, {
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

export const useProjectColor = () => {
    
};
