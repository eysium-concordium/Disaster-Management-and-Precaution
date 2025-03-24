import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from "../NavBar2/NavBar";
import Map from "./Map";
import Emergency from "./Emergency";
import ManMade from "./ManMade";
import Natural from "./Natural";
import Donation from "./Donation";
import Home from "./Home";
import Authentication from "../Registration/Authentication"; // Import Authentication component

function NavPag() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/natural" element={<Natural />} />
        <Route exact path="/manmade" element={<ManMade />} />
        <Route exact path="/emergency" element={<Emergency />} />
        <Route exact path="/map" element={<Map />} />
        <Route exact path="/donate" element={<Donation />} />
        <Route path="/authentication/*" element={<Authentication />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default NavPag;
