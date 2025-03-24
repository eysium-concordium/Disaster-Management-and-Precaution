import React from "react";
import './NavBar.css';
import { Link, useLocation } from "react-router-dom";

function NavBar2() {
    const location = useLocation();

    return (
        <div className="nav2">
            <Link className={`link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            <Link className={`link ${location.pathname === "/natural" ? "active" : ""}`} to="/natural">Natural</Link>
            <Link className={`link ${location.pathname === "/manmade" ? "active" : ""}`} to="/manmade">Man-Made Disaster</Link>
            <Link className={`link ${location.pathname === "/emergency" ? "active" : ""}`} to="/emergency">Emergency</Link>
            <Link className={`link ${location.pathname === "/donate" ? "active" : ""}`} to="/donate">Donate</Link>
        </div>
    );
}

export default NavBar2;