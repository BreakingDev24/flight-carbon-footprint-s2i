import { Box } from "@mui/material";
import FootprintForm from "../../components/FootprintForm/FootprintForm";
import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <PageLayoutContainer>
      <Helmet>
        <title>TG - Home</title>
      </Helmet>
      <Box
        component="section"
        sx={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FootprintForm></FootprintForm>
      </Box>
    </PageLayoutContainer>
  );
}
