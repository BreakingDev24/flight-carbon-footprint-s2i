import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/AppLayoutContainer/AppLayoutContainer";
import Footer from "./components/Footer/Footer";
// import FootprintForm from "./components/FootprintForm/FootprintForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />}></Route>
          </Routes>
          <Footer />
        </LayoutContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
