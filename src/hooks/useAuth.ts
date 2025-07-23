import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import { fetchWithAuth } from "../lib/fetchWithAuth";
import { useNavigate } from "react-router-dom";
import type { IUser } from "../Interfaces/IUser";



const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res: Response = await fetch(`${BackendUrl}${Endpoints.login}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed" + (res.statusText));

      const data = await res.json();

      // Store JWT in localStorage
      localStorage.setItem("token", data.token);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};

const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.register}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res;

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return () => {
    localStorage.removeItem("token");
    navigate("/");
    queryClient.clear();
  };
};


const useMe = () =>
  useQuery<IUser>({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      const user = await fetchWithAuth(`${BackendUrl}${Endpoints.me}`)

      return user;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

export { useLogin, useRegister, useLogout, useMe };