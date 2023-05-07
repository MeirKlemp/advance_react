import { Navigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  setUser(NaN);
  localStorage.removeItem("currentUser");
  return <Navigate to="/login" replace />;
};
export default Logout;
