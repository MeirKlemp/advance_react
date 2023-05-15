import { Navigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  onLogout?.();
  return <Navigate to="/login" replace />;
};
export default Logout;
