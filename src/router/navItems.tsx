import { Home as HomePage } from "src/pages/home";
import { Shop as ShopPage } from "src/pages/shop";
import { Login as LoginPage } from "src/pages/login";

export const navItems = [
  {
    path: "/",
    name: "Home",
    element: <HomePage />,
  },
  {
    path: "/shop",
    name: "Shop",
    element: <ShopPage />,
  },
  {
    path: "/login",
    name: "Login",
    element: <LoginPage />,
  },
];
