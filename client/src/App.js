import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NavPag from "./components/NavPage/NavPag";
function App() {
  return (
    <body>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <NavBar />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <NavPag />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;