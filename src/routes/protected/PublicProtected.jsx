import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import LoadingPage from "../../shared/ui/pages/LoadingPage";

const PublicProtected = () => {
  const { loggedInUser, isloading } = useSelector((store) => store.auth);

  if (isloading) return <LoadingPage />;

  if (loggedInUser) {
    return <Navigate to={"/"} replace />;
  }

  return <Outlet />;
};

export default PublicProtected;
