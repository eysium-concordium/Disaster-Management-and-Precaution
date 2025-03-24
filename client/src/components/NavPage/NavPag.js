import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../NavBar2/NavBar";

import Map from "./Map";
import Emergency from "./Emergency";
import ManMade from "./ManMade";
import Natural from "./Natural";
import Donation from "./Donation";
import Home from "./Home";
import Login from "../Registration/Login";
import Signup from "../Registration/Signup";

function NavPag() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="/register" element={<Signup></Signup>} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/natural" element={<Natural />} />
          <Route exact path="/manmade" element={<ManMade />} />
          <Route exact path="/emergency" element={<Emergency />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="/donate" element={<Donation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavPag;
