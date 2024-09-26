import { Container, Typography, Card, CardContent, Box } from "@mui/material";

import Grid from "@mui/material/Grid2";

import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <>
      <PageLayoutContainer>
        <Helmet>
          <title>TG - About</title>
        </Helmet>
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
          <Typography variant="h3" align="center" gutterBottom>
            About Travel Green
          </Typography>

          <Typography variant="body1" align="center" paragraph>
            Travel Green is a project developed as the final part of the
            Frontend Developer course at start2impact. The idea of creating an
            application that calculates the carbon footprint of a flight stems
            from the awareness that, while traveling is an enriching experience,
            it has a significant impact on the environment.
          </Typography>

          <Typography variant="body1" align="center" paragraph>
            The website was built by combining all the skills acquired during
            the course, using:
          </Typography>

          <Grid container spacing={4} sx={{ marginTop: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    HTML
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Used for the structure of the web pages.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    CSS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Responsible for styling and customization.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    JavaScript
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Adds interactivity to the application.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    React
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manages the user interface and application logic.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 4 }}>
            <Typography variant="body1" align="center" paragraph>
              The carbon footprint calculation is made possible thanks to the
              GoClimate API.
            </Typography>
          </Box>
        </Container>
      </PageLayoutContainer>
    </>
  );
}
