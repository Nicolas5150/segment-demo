import { createBrowserRouter } from "react-router-dom";
import { Main as MainLayout } from "src/layouts/main";
import { Error as ErrorPage } from "src/pages/error";
import { navItems } from "./navItems";
import { otherRoutes } from "./otherRoutes";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [...navItems, ...otherRoutes],
  },
]);
