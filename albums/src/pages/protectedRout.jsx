import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Protected = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/error" replace />;
  }
  return <Outlet />;
};
export default Protected;
