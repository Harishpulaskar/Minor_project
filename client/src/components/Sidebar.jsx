import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear tokens if any
        localStorage.removeItem("adminToken");
        navigate("/");
    };

    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Admin Panel</h3>

            <nav className="sidebar-nav">
                <Link to="/admin-dashboard/faculty-list" className="nav-item">
                    Faculty List
                </Link>

                <Link to="/admin-dashboard/add-faculty" className="nav-item">
                    Add / Remove Faculty
                </Link>
            </nav>

            {/* Logout Button */}
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
