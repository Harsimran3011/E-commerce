import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import LoadingPage from "../../shared/ui/pages/LoadingPage";

const MainProtected = () => {
  const { loggedInUser, isloading } = useSelector((store) => store.auth);

  if (isloading) return <LoadingPage />;

  if (!loggedInUser) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default MainProtected;
