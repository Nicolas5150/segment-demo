import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initId } from "src/utils/segment/identify/initId";

export function Login() {
  const segmentUser = "segment-user";
  const user = localStorage.getItem(segmentUser);
  const navigate = useNavigate();
  const [userNameValue, setUsernameValue] = useState("");

  if (user) {
    navigate("/");
  }

  const logUserIn = () => {
    localStorage.setItem(segmentUser, userNameValue);
    initId(userNameValue);
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
