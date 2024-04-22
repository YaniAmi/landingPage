import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({
  children,
  path,
  navigateTo = "/login",
  allow = [],
}) => {
  const location = useLocation();
  const allowBoolExec =
    location.pathname === path ? allow.map((func) => func()) : [true];
  return !allowBoolExec.includes(false) ? (
    children
  ) : (
    <Navigate to={navigateTo} />
  );
};

export default PrivateRoute;
