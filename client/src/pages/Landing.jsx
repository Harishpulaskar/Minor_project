import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="bg-glass">
            <div className="bg-content">
                <div className="landing-container">

                    <h1 className="landing-title">SDM MEDICAL COLLEGE DHARWAD</h1>
                    <h2 className="landing-subtitle">PG Assessment Tool</h2>

                    <div className="role-cards">

                        {/* ADMIN CARD */}
                        <div className="role-card">
                            <h3 style={{ color: "#1d4ed8" }}>Admin</h3>
                            <p>The Admin (HOD) can register faculty, view dashboards, and monitor overall performance.</p>
                            <button className="btn-admin" onClick={() => navigate("/admin-login")}>
                                Login as Admin
                            </button>
                        </div>

                        {/* FACULTY CARD */}
                        <div className="role-card">
                            <h3 style={{ color: "#047857" }}>Faculty</h3>
                            <p>Faculty can evaluate interns, assign scores, write remarks and track improvements.</p>
                            <button className="btn-faculty" onClick={() => navigate("/faculty-login")}>
                                Login as Faculty
                            </button>
                        </div>

                        {/* INTERN CARD */}
                        <div className="role-card">
                            <h3 style={{ color: "#b45309" }}>Intern</h3>
                            <p>Interns can view evaluations, scores, feedback, and performance reports.</p>
                            <button className="btn-intern" onClick={() => navigate("/pg-login")}>
                                Login as Intern
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
