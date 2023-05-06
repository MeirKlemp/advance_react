import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../App";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/error" replace />;
  }
  console.log(children);
  return children;
};
export default Protected;

// https://dev.to/collins87mbathi/reactjs-protected-route-m3j
