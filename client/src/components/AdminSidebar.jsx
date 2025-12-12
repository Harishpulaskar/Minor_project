import React from "react";
import { NavLink } from "react-router-dom";
import "../pages/AdminDashboard.css";

export default function AdminSidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">PG Assessment Tool</h2>

            <ul className="menu">
                <li>
                    <NavLink to="/admin-dashboard/faculty-list" className="menu-item">
                        Faculty List
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/admin-dashboard/add-faculty" className="menu-item">
                        Add Faculty
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
