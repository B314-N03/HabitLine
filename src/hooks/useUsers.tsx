import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import type { IUser } from "../Interfaces/IUser";

export const useUsers = () =>
  useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`${BackendUrl}${Endpoints.getUsers}`);
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: IUser & { isEditing?: boolean }) => {
      const endpoint = user.isEditing ? `${Endpoints.updateUser}${user.id}` : Endpoints.createUser;
      const res = await fetch(`${BackendUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error("Failed to submit user");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
