import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Endpoints } from "../Endpoints/const";
import { omit } from "../components/Helpers/Omit";
import type { IDailyTask } from "../Interfaces/IDailyTask";
import { fetchWithAuth } from "../lib/fetchWithAuth";

export const useDailyTasks = () =>
  useQuery<IDailyTask[]>({
    queryKey: ['daily_tasks'],
    queryFn: async () => {
      return await fetchWithAuth(Endpoints.getDailyTasks);
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateDailyTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dailyTask: IDailyTask & { isEditing?: boolean }) => {
      const { isEditing, ...rest } = dailyTask
      const payload = isEditing ? rest : omit(rest, ['id'])
      const endpoint = dailyTask.isEditing ? Endpoints.updateDailyTask : Endpoints.createDailyTask;
      return await fetchWithAuth(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
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
      const res = await fetchWithAuth(`${Endpoints.deleteDailyTask}${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily_tasks'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
