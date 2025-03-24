
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NavPag from "./components/NavPage/NavPag";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <>
    //   <BrowserRouter>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<NavPag />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <div className="App">
      <NavBar />
      <NavPag />
    </div>
  );
}

export default App;
