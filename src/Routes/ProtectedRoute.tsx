import { Navigate } from "react-router-dom";
import { useMe } from "../hooks/useAuth";
import type { JSX } from "@emotion/react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoading, isError } = useMe();


  if (isLoading) return <div>Loading auth...</div>;

  if (isError) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
