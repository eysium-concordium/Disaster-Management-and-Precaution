import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar2(){
    
    return(
        <>
        <div className="nav2">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/natural">Natural</Link>
            <Link className="link" to="/manmade">Man-Made Disaster</Link>
            <Link className="link" to="/emergency">Emergency</Link>
            {/* <Link className="link" to="/map">Map</Link> */}
            <Link className="link" to="/donate">Donate</Link>
        </div>
        </>
    );
}
export default NavBar2;