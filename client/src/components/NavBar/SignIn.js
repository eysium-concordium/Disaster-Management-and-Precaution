import React from 'react';
import './SignIn.css';

const SignIn = ({ onClose }) => {
    return (
        <div className="signin-overlay">
            <div className="signin-container">
                <h2>Sign In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SignIn;