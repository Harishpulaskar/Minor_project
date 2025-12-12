import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function AdminSidebar() {
    return (
        <div className="sidebar">
            <h2>Admin Panel</h2>

            <NavLink to="/admin-dashboard/faculty-list">Faculty List</NavLink>
            <NavLink to="/admin-dashboard/add-faculty">Add Faculty</NavLink>
        </div>
    );
}
