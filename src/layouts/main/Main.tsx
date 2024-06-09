import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "src/components/Nav/Nav";
import { usePageViews } from "src/utils/segment/page/usePageViews";

export function Main() {
  usePageViews();
  return (
    <>
      <Nav />
      <Box
        sx={{
          margin: "auto",
          maxWidth: "2060px",
          px: 2,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
