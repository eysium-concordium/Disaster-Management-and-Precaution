import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from "../NavBar2/NavBar";

import Map from "./Map";
import Emergency from "./Emergency";
import ManMade from "./ManMade";
import Natural from "./Natural";


function NavPag() {
  return (
    <>
    
      <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route exact path="/"  />  */}
        <Route exact path="/natural" element={<Natural/>} /> 
        <Route exact path="/manmade" element={<ManMade/>} /> 
        <Route exact path="/emergency" element={<Emergency/>} /> 
        <Route exact path="/map" element={<Map/>} /> 
        
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default NavPag;
