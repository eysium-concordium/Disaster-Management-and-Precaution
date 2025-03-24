
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NavPag from "./components/NavPage/NavPag";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <NavBar />
      <NavPag />
    </div>
  );
}

export default App;
