import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import FacultyList from "./FacultyList";
import AddFaculty from "./AddFaculty";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    return (
        <div className="dashboard-container">
            <AdminSidebar />

            <div className="dashboard-content">
                <Routes>
                    <Route path="/" element={<Navigate to="faculty-list" replace />} />
                    <Route path="faculty-list" element={<FacultyList />} />
                    <Route path="add-faculty" element={<AddFaculty />} />
                </Routes>
            </div>
        </div>
    );
}
