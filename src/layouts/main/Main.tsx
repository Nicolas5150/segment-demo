import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "src/components/Nav/Nav";

export function Main() {
  return (
    <Box
      sx={{
        px: 2,
        maxWidth: "2060px",
        margin: "auto",
      }}
    >
      <Nav />
      <Outlet />
    </Box>
  );
}
