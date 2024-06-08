import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Login() {
  const user = localStorage.getItem("segment-user");
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

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
      <TextField id="filled-basic" label="Username" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
      <Box sx={{ display: "flex", gap: 4, marginLeft: "auto" }}>
        <Button variant="outlined">Sign up</Button>
        <Button variant="contained">Login</Button>
      </Box>
    </Box>
  );
}
