import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const { loggedInUser } = useSelector((store) => store.auth);

  if (loggedInUser) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default PublicProtected;
