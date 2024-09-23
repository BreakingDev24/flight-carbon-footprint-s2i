import { Box } from "@mui/material";
import FootprintForm from "../../components/FootprintForm/FootprintForm";
import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
export default function Home() {
  return (
    <PageLayoutContainer>
      <Box component="section">
        <FootprintForm></FootprintForm>
      </Box>
    </PageLayoutContainer>
  );
}
