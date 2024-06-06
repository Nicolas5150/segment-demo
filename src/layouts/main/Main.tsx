import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";

export function Main() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
