import { Navigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  debugger;
  setUser(null);
  return <Navigate to="/login" replace />;
};
export default Logout;
