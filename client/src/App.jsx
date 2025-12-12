import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Landing Page */
import Landing from "./pages/Landing";

/* Login Pages */
import AdminLogin from "./pages/AdminLogin";
import FacultyLogin from "./pages/FacultyLogin";
import PGStudentLogin from "./pages/PGStudentLogin";

/* Dashboards */
import AdminDashboard from "./pages/AdminDashboard";

/* Protected Route Auth */
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="/landing" element={<Landing />} />

        {/* Login Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/pg-login" element={<PGStudentLogin />} />

        {/* Admin Dashboard (only if logged in as admin) */}
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
