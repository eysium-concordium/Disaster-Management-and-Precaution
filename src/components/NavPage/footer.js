import React from "react";
import "./Footer.css";

function footer() {
  return (
    <>
      <div className=" cont1 h-100 d-flex align-items-center justify-content-center">
        <div>
          {/* <label htmlFor=" ">Enter email for warning and prealerts :</label> */}
          <input type="email" name="email" id="email" placeholder="Enter email for alerts" />
          <button className="btn btn-danger">Submit</button>
        </div>
        <div>
          <h2>To join as Voluteer</h2>
          <button className="btn btn-danger">REGISTSER</button>
        </div>
      </div>
      <div className=" cont2">© Copyright 2023</div>
    </>
  );
}

export default footer;
