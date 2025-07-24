import { isTokenExpired } from "../components/Helpers/isTokenExpired";
import { BackendUrl, Endpoints } from "../Endpoints/const";

export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
) => {
  let token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    console.log("Token expired or missing. Attempting to refresh...");
    try {
      const refreshRes = await fetch(`${BackendUrl}${Endpoints.refresh}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!refreshRes.ok) throw new Error("Failed to refresh token");

      const refreshData = await refreshRes.json();
      token = refreshData.token;

      localStorage.setItem("token", token ?? "");
    } catch (err) {
      console.error("Token refresh failed:", err);
      localStorage.removeItem("token");
      throw new Error("Authentication failed. Please log in again.");
    }
  }

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`Request failed for ${url}: ${res.status}`);
  }

  return res.json();
};
