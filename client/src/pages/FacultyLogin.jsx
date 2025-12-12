import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function FacultyLogin() {
    const [details, setDetails] = useState({ email: "", password: "" });

    return (
        <div className="bg-glass">
            <div className="bg-content">

                <div className="login-card">
                    <h1 className="login-title">Faculty Login</h1>
                    <p className="login-subtitle">PG Intern Management System</p>

                    <input
                        type="email"
                        placeholder="Faculty Email"
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setDetails({ ...details, password: e.target.value })}
                    />

                    <button className="login-btn">Login</button>

                    <div className="login-links">
                        <Link to="/admin-login">Admin Login</Link>
                        <Link to="/pg-login">Intern Login</Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
