import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <Box
      component="nav"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mb: 2,
        width: "100%",
      }}
    >
      <Typography
        component="div"
        sx={{ fontSize: "1.2rem", pr: { xs: 2, md: 0 } }}
      >
        Segment Demo
      </Typography>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 5, sm: 15 },
          justifyContent: "space-between",
          listStyleType: "none",
          padding: 0,
          a: {
            textDecoration: "none",
            color: "blue",
          },
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {/* Will remove after setting up article ids */}
        <li>
          <Link to="/article">Articles</Link>
        </li>
      </Box>
    </Box>
  );
}
