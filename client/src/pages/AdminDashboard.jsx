import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import FacultyList from "./FacultyList";
import AddFaculty from "./AddFaculty";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
    };

    return (
        <div className="dashboard-container">

            <AdminSidebar />

            <div className="dashboard-content">
                <div className="topbar">
                    <h2>Faculty Dashboard</h2>

                    <button className="logout-btn" onClick={logout}>
                        Logout
                    </button>
                </div>

                <div className="inner-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="faculty-list" replace />} />
                        <Route path="faculty-list" element={<FacultyList />} />
                        <Route path="add-faculty" element={<AddFaculty />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
