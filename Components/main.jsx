import React from "react";

import HomePage from "./homePage";
import Service from "./service";
import Aboutus from "./aboutus";
import WhyUs from "./why";
import OurTeam from "./ourTeam";
import Testominal from "./testominal";
import Footer from "./footer";
import Navbar from "./navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./projects";

const Home = () => {
  const [show, setShow] = React.useState("");
  return (
    <div className="hero_area">
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        id="10"
        path="/"
        element={
          <div style={{ zIndex: 100 }}>
{/* <Projects /> */}
  <HomePage />
  <Service />
  <Aboutus />
  <WhyUs />
  {/* <OurTeam /> */}
  <Testominal />
</div>

        }
      />

      <Route path="/About" element={<Aboutus id="0" />} />
      <Route path="/Our Services" element={<Service id="1" />} />
      <Route path="/Why Us" element={<WhyUs />} id="2" />
      <Route path="/Our Members" element={<OurTeam />} id="3" />
      <Route path="/Testimonials" element={<Testominal id="4" />} />
      <Route path="/Contact Us" element={<Footer />} id="5" />
    </Routes>
    <Footer />
  </BrowserRouter>
</div>

  );
};

export default Home;
