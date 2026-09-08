import { useNavigate, useParams } from "react-router";

const useProductHook = () => {
  const navigate = useNavigate();

  return {
    navigate,
  };
};

export default useProductHook;
