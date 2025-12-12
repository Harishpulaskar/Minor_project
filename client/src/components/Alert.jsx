import React, { useEffect } from "react";
import "../pages/AdminDashboard.css";

export default function Alert({ type, message, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 3000);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className={`alert-box ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>×</button>
        </div>
    );
}
