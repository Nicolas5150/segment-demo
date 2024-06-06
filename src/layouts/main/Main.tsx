import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "../../components/Nav/Nav";

export function Main() {
  return (
    <Box sx={{ margin: 2 }}>
      <Nav />
      <Outlet />
    </Box>
  );
}
