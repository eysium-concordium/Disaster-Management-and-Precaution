import React, { useState } from 'react';
import './NavBar.css';
import logo from './images/logo.png';
import sign from './images/sign In.png';
import call from './images/call.png';
import email from './images/email.png';
import SignIn from './SignIn'; // Import the SignIn component

const NavBar = () => {
    const [showSignIn, setShowSignIn] = useState(false);

    const handleSignInClick = () => {
        setShowSignIn(true);
    };

    const handleCloseSignIn = () => {
        setShowSignIn(false);
    };

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Resilience Logo" width={40} />
                    <span className="brand-name">Resilience</span>
                </div>
                <div className="navbar-contact">
                    <div className="contact-item">
                        <img src={call} alt="Call Icon" width={20} />
                        <span>9999-999-999</span>
                    </div>
                    <div className="contact-item">
                        <img src={email} alt="Email Icon" width={20} />
                        <span>resilience@xyz.com</span>
                    </div>
                </div>
                <div className="navbar-actions">
                    <button className="signin-button btn btn-warning" onClick={handleSignInClick}>
                        <img src={sign} alt="Sign In Icon" width={20} />
                        <span>Sign In</span>
                    </button>
                </div>
            </nav>
            {showSignIn && <SignIn onClose={handleCloseSignIn} />}
        </>
    );
};

export default NavBar;