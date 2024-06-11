import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initId } from "src/utils/segment/identify/initId";

/**
 * Component for rendering the login page.
 * @returns {JSX.Element | null} - The rendered component.
 */
export function Login(): JSX.Element | null {
  const segmentUser = "segment-user";
  const user = localStorage.getItem(segmentUser);
  const navigate = useNavigate();
  const [userNameValue, setUsernameValue] = useState("");

  if (user) {
    navigate("/");
  }

  const logUserIn = () => {
    localStorage.setItem(segmentUser, userNameValue);
    initId(userNameValue, { email: userNameValue, name: userNameValue });
    /*
      When a brand new user logs in for the first time, the Profile isn't instantiated fast enough
      on segments side - before trying to query it. Therefore, we get a 500 error.
      A hacky way to solve this is to set a timeout around the window location.
      The more elegant solution would be to set a flag for a new user
      and ignore the 500 or not even send the request the on the first mount.
      Since this is a demo, we can just ignore it for the time being as it doesn't effect anything directly. 
    */
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        justifyContent: "center",
        m: "auto",
        maxWidth: "690px",
        mt: 12,
      }}
    >
      <Typography component="h4" sx={{ pb: 1, pt: 2 }} variant="h4">
        Login / Sign up
      </Typography>
      <TextField
        id="username-login"
        label="Username"
        value={userNameValue}
        variant="filled"
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      <TextField
        id="password-login"
        label="Password"
        type="password"
        variant="filled"
      />
      <Box sx={{ display: "flex", gap: 4, marginLeft: "auto" }}>
        <Button variant="outlined" onClick={logUserIn}>
          Sign up
        </Button>
        <Button variant="contained" onClick={logUserIn}>
          Login
        </Button>
      </Box>
    </Box>
  );
}
