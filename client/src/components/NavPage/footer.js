import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0 text-center">
            <h5>Stay Updated</h5>
            <div className="d-flex justify-content-center">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control me-2"
                placeholder="Enter email for alerts"
              />
              <button className="btn btn-danger">Submit</button>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <h5>Join as a Volunteer</h5>
            <button className="btn btn-danger mt-2">Register</button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">© Copyright 2023 | Resilience</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;