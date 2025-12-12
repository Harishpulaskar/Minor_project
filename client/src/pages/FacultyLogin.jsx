import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyLogin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const submit = async () => {
        const res = await fetch("/api/faculty/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        if (!res.ok) return setError(data.message);

        localStorage.setItem("facultyToken", data.token);
        localStorage.setItem("facultyId", data.facultyId);

        navigate("/faculty-dashboard");
    };

    return (
        <div className="login-container">
            <h2>Faculty Login</h2>

            {error && <p className="error">{error}</p>}

            <input placeholder="Username"
                onChange={(e) => setForm({ ...form, username: e.target.value })} />

            <input type="password" placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })} />

            <button onClick={submit}>Login</button>
        </div>
    );
}
