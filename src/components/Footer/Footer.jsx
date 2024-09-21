import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Antonio Avolio
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="https://github.com/yourusername"
          color="inherit"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon sx={{ mx: 1 }} />
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
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
