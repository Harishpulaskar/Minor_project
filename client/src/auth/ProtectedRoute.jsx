import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {

    const token = localStorage.getItem(`${role}Token`);

    if (!token) {
        return <Navigate to={`/${role}-login`} replace />;
    }

    return children;
}
