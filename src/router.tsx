import { createBrowserRouter } from "react-router-dom";
import { Main as MainLayout } from "./layouts/main";
import { Article as ArticlePage } from "./pages/article";
import { Error as ErrorPage } from "./pages/error";
import { Home as HomePage } from "./pages/home";
import { Login as LoginPage } from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/article",
        element: <ArticlePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
