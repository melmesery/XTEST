import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="#hero" element={<Hero />} />
          <Route path="#about" element={<About />} />
          <Route path="#skills" element={<Skills />} />
          {/* <Route path="#portfolio" element={<Portfolio />} /> */}
          <Route path="#services" element={<Services />} />
          <Route path="#contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
