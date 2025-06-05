import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import { omit } from "../components/Helpers/Omit";
import type { IDailyTask } from "../Interfaces/IDailyTask";

export const useDailyTasks = () =>
  useQuery<IDailyTask[]>({
    queryKey: ['daily_tasks'],
    queryFn: async () => {
      const res = await fetch(`${BackendUrl}${Endpoints.getDailyTasks}`);
      if (!res.ok) throw new Error("Failed to fetch tasks");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateDailyTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dailyTask: IDailyTask & { isEditing?: boolean }) => {
        const {isEditing, ...rest} = dailyTask
        const payload = isEditing ? rest : omit(rest, ['id'])
        const endpoint = dailyTask.isEditing ? Endpoints.updateDailyTask : Endpoints.createDailyTask;
        const res = await fetch(`${BackendUrl}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to submit daily_task");
        return res.json();
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['daily_tasks'] });
    },
  });
};

export const useDeleteDailyTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${BackendUrl}${Endpoints.deleteDailyTask}${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to delete daily_task");
      console.log(res);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily_tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
