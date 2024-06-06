import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "src/components/Nav/Nav";

export function Main() {
  return (
    <Box sx={{ mx: 2 }}>
      <Nav />
      <Outlet />
    </Box>
  );
}
