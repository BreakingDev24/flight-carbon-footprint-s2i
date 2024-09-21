import { useState } from "react";
import AppLayoutContainer from "./components/AppLayoutContainer/AppLayoutContainer";
// import FootprintForm from "./components/FootprintForm/FootprintForm";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <AppLayoutContainer>
        <Home />
      </AppLayoutContainer>
    </>
  );
}

export default App;
