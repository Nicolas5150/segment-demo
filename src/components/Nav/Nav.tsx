import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "src/router/navItems";

export function Nav() {
  return (
    <Box
      component="nav"
      sx={{
        alignItems: "center",
        boxShadow: "2px 7px 10px lightgray",
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "2060px",
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
              color: "black",
              fontSize: "1.1rem",
              textDecoration: "none",
              ":hover, :active, :focus": {
                borderBottom: "solid 2px black",
                outline: "none",
              },
            },
          }}
        >
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Typography>
                <Link to={navItem.path}>{navItem.name}</Link>
              </Typography>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
