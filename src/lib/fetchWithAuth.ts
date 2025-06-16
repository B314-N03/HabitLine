export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {}
) => {
  const token = localStorage.getItem("token");

  const headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    // Optional: log or redirect to login on 401
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
};
