import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <h1>SDM MEDICAL COLLEGE DHARWAD</h1>
            <h2>PG Assessment Tool</h2>

            <div className="roles">
                <div className="role-card">
                    <h3>Admin</h3>
                    <button onClick={() => navigate("/admin-login")}>Login as Admin</button>
                </div>

                <div className="role-card">
                    <h3>Faculty</h3>
                    <button onClick={() => navigate("/faculty-login")}>Login as Faculty</button>
                </div>

                <div className="role-card">
                    <h3>PG Student</h3>
                    <button onClick={() => navigate("/pg-login")}>Login as PG Student</button>
                </div>
            </div>
        </div>
    );
}
