import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setProducts } from "../features/Collection/state/productSlice";
import LoadingPage from "../shared/ui/pages/LoadingPage";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";
import { productApi } from "../features/Collection/api/productApi";
import NotFound from "../shared/ui/pages/NotFound";
import { hydrateUserAction } from "../features/auth/state/authAction";

const HomePage = lazy(() => import("../shared/ui/pages/HomePage"));
const Blog = lazy(() => import("../shared/ui/pages/Blog"));
const ContactPage = lazy(() => import("../shared/ui/pages/ContactPage"));

const AuthLayout = lazy(() => import("../app/layout/AuthLayout"));
const MainLayout = lazy(() => import("../app/layout/MainLayout"));

const Collection = lazy(
  () => import("../features/Collection/ui/pages/Collection"),
);

const ProductDetails = lazy(
  () => import("../features/Collection/ui/pages/ProductDetails"),
);

const AboutPage = lazy(() => import("../shared/ui/pages/AboutPage"));
const LoginPage = lazy(() => import("../features/auth/ui/LoginPage"));
const RegisterPage = lazy(() => import("../features/auth/ui/RegisterPage"));

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.error("Hydration error: ", error);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productApi();

      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  const router = createBrowserRouter([
    // ================= AUTH ROUTES =================

    {
      path: "/auth",
      element: (
        <Suspense fallback={<LoadingPage />}>
          <PublicProtected />
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <AuthLayout />
            </Suspense>
          ),
          children: [
            {
              path: "register",
              element: <RegisterPage />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },

    // ================= MAIN ROUTES =================

    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingPage />}>
          <MainProtected />
        </Suspense>
      ),
      children: [
        {
          element: (
            <Suspense fallback={<LoadingPage />}>
              <MainLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: "blog",
              element: <Blog />,
            },
            {
              path: "contact",
              element: <ContactPage />,
            },
            {
              path: "collection",
              children: [
                { path: "", element: <Collection /> },
                { path: ":id", element: <ProductDetails /> },
              ],
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },

    // =============== 404 ================
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
