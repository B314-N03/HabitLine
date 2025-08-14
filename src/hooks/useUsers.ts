import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Endpoints } from "../Endpoints/const";
import type { IUser } from "../Interfaces/IUser";
import { fetchWithAuth } from "../lib/fetchWithAuth";
import { omit } from "../components/Helpers/Omit";

export const useUsers = () =>
  useQuery<IUser[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res: IUser[] = await fetchWithAuth(Endpoints.getUsers);
      return res;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useCreateOrUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: IUser & { isEditing?: boolean }) => {
      const userWithoutEmail = omit(user, ['email']);
      const endpoint = user.isEditing ? `${Endpoints.updateUser}` : Endpoints.createUser;
      const res: IUser = await fetchWithAuth(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userWithoutEmail),
      });
      localStorage.setItem('user', JSON.stringify(res));
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
