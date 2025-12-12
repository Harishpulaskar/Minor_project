import React, { useEffect } from "react";

export default function Toast({ type = "success", message, onClose }) {

    useEffect(() => {
        const timer = setTimeout(() => onClose(), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-xl 
      backdrop-blur-md text-white flex items-center gap-3 animate-toastSlideIn
      ${type === "success" ? "bg-green-600/90" : "bg-red-600/90"}`}
        >
            <span className="text-xl">
                {type === "success" ? "✔" : "⚠"}
            </span>
            <p className="font-medium">{message}</p>
        </div>
    );
}
