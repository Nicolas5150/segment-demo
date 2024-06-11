import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { unsetId } from "src/utils/segment/identify/unsetId";
import { navItems } from "src/router/navItems";
import { NavItem as NavItemType } from "src/types/router/navItem";

/**
 * Renders a navigation bar with links based on the provided navigation items.
 */
export function Nav(): JSX.Element {
  const segmentUser = "segment-user";
  const user = localStorage.getItem(segmentUser);

  /**
   * Updates the name of a navigation item based on the user's authentication status.
   * @param {string} navItemName - The name of the navigation item.
   * @returns {string} - The updated name of the navigation item.
   */
  const updateNavItemName = (navItemName: string): string => {
    if (navItemName === "Login" && user) {
      return "Logout";
    }
    return navItemName;
  };

  /**
   * Checks if a navigation item should be overridden based on the user's authentication status.
   * @param {NavItemType} navItem - The navigation item to check.
   * @returns {JSX.Element} - The rendered link or anchor element.
   */
  const checkForOverRidingNav = (navItem: NavItemType): JSX.Element => {
    if (navItem.name === "Login" && user) {
      return (
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem(segmentUser);
            unsetId();
          }}
        >
          Logout
        </a>
      );
    }
    return <Link to={navItem.path}>{updateNavItemName(navItem.name)}</Link>;
  };

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
              <Typography>{checkForOverRidingNav(navItem)}</Typography>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
