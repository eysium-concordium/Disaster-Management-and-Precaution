import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [suc, setSuc] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Mock authentication check
        const isAuthenticated = true; // Change this to false to test redirection
        if (isAuthenticated) {
            setSuc("Succeeded OK");
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <h2>Dashboard</h2>
                <p>{suc}</p>
            </div>
        </div>
    );
}

export default Dashboard;
