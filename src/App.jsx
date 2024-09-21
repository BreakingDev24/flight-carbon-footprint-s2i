import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayoutContainer from "./components/AppLayoutContainer/AppLayoutContainer";
import Footer from "./components/Footer/Footer";
// import FootprintForm from "./components/FootprintForm/FootprintForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayoutContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </AppLayoutContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
