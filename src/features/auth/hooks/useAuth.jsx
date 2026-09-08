import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { setLoggedInUser } from "../state/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm();

  const loginForm = async (data) => {
    try {
      const user = await loginUserApi(data);

      const loginUser = localStorage.getItem("accessToken");

      if (loginUser) {
        dispatch(setLoggedInUser(loginUser));
      } else {
        dispatch(setLoggedInUser(user));
      }

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const registerForm = (data) => {
    console.log("Register Data:", data);
  };

  const removeLoggedInUser = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    navigate("/auth/login");
  };

  return {
    loginForm,
    registerForm,
    handleSubmit,
    reset,
    errors,
    register,
    navigate,
    removeLoggedInUser,
  };
};
