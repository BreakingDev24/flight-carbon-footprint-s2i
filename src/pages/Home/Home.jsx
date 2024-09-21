import style from "./Home.module.css";
import FootprintForm from "../../components/FootprintForm/FootprintForm";
import PageLayoutContainer from "../../components/PageLayoutContainer/PageLayoutContainer";
export default function Home() {
  return (
    <PageLayoutContainer>
      <FootprintForm></FootprintForm>
    </PageLayoutContainer>
  );
}
