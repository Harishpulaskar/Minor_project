import React, { useEffect } from "react";

export default function Popup({ type = "success", message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => onClose(), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-lg text-white font-semibold 
      transition-all animate-slideIn
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
            {message}
        </div>
    );
}
