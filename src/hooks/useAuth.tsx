import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import { fetchWithAuth } from "../lib/fetchWithAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.login}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");

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

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.register}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // Optional: parse error message from response body
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || "Registration failed");
      }

      const data = await res.json();

      // Optionally, store JWT if your backend sends it on registration
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

export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    localStorage.removeItem("token");
    queryClient.clear();
  };
};

export const useMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      const res = await fetchWithAuth(`${BackendUrl}${Endpoints.me}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Invalid token");

      return res.json();
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
