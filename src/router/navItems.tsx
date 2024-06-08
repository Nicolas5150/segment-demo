import { Home as HomePage } from "src/pages/home";
import { Shop as ShopPage } from "src/pages/shop";
import { Login as LoginPage } from "src/pages/login";

export const navItems = [
  {
    element: <HomePage />,
    name: "Home",
    path: "/",
  },
  {
    element: <ShopPage />,
    name: "Shop",
    path: "/shop",
  },
  {
    element: <LoginPage />,
    name: "Login",
    path: "/login",
  },
];
