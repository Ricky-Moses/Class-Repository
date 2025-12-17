import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const token = localStorage.getItem("Token");

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}
