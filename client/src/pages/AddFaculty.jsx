import React, { useState } from "react";
import Alert from "../components/Alert";
import "./AdminDashboard.css";

export default function AddFaculty() {
    const today = new Date().toISOString().split("T")[0];

    const [form, setForm] = useState({
        facultyID: "",
        name: "",
        contactNo: "",
        email: "",
        specialist: "",
        joiningDate: today,
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [alert, setAlert] = useState(null);

    const update = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        for (let key in form) {
            if (!form[key]) return setAlert({ type: "error", message: `${key} cannot be empty` });
        }

        if (form.password.length < 8)
            return setAlert({ type: "error", message: "Password must be at least 8 characters" });

        if (form.password !== form.confirmPassword)
            return setAlert({ type: "error", message: "Passwords do not match" });

        const res = await fetch("/api/faculty", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (!res.ok) {
            setAlert({ type: "error", message: data.message });
        } else {
            setAlert({ type: "success", message: "Faculty created successfully!" });
            setForm({
                facultyID: "",
                name: "",
                contactNo: "",
                email: "",
                specialist: "",
                joiningDate: today,
                username: "",
                password: "",
                confirmPassword: "",
            });
        }
    };

    return (
        <div>
            {alert && (
                <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
            )}

            <h3 className="section-title">Add New Faculty</h3>

            <div className="form-container">
                <label>Faculty ID</label>
                <input name="facultyID" value={form.facultyID} onChange={update} />

                <label>Name</label>
                <input name="name" value={form.name} onChange={update} />

                <label>Contact No</label>
                <input name="contactNo" value={form.contactNo} onChange={update} />

                <label>Email</label>
                <input name="email" value={form.email} onChange={update} />

                <label>Specialist</label>
                <input name="specialist" value={form.specialist} onChange={update} />

                <label>Joining Date</label>
                <input type="date" name="joiningDate" value={form.joiningDate} onChange={update} />

                <label>Username</label>
                <input name="username" value={form.username} onChange={update} />

                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={update} />

                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={update} />

                <button className="submit-btn" onClick={submit}>
                    Create Faculty
                </button>
            </div>
        </div>
    );
}
