import { Box } from "@mui/material";
import FootprintForm from "../../components/FootprintForm/FootprintForm";
import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <PageLayoutContainer>
      <Helmet>
        <title>FFC - Home</title>
      </Helmet>
      <Box component="section">
        <FootprintForm></FootprintForm>
      </Box>
    </PageLayoutContainer>
  );
}
