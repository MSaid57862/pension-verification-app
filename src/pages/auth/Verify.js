// import { Link as RouterLink } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
// import AuthSocial from "../../sections/auth/AuthSocial";
// import Login from "../../sections/auth/LoginForm";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3">you successfully Register please wait for confirmation</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body1">
            thanks
          </Typography>
        </Stack>
      </Stack>
      {/* Remove VerifyForm component */}
    </>
  );
}
