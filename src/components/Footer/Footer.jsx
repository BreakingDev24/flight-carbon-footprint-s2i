import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Antonio Avolio
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="https://github.com/BreakingDev24"
          color="inherit"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ mx: 1 }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/antonio-avolio-015936232/"
          color="inherit"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon sx={{ mx: 1 }} />
        </Link>
      </Box>
    </Box>
  );
}
