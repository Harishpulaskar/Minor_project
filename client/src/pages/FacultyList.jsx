import React, { useEffect, useState } from "react";
import Alert from "../components/Alert";
import ConfirmModal from "../components/ConfirmModal";
import "./AdminDashboard.css";

export default function FacultyList() {
    const [faculty, setFaculty] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [alert, setAlert] = useState(null);
    const [confirmBox, setConfirmBox] = useState(null);

    useEffect(() => {
        fetch("/api/faculty")
            .then(res => res.json())
            .then(data => {
                setFaculty(data);
                setFiltered(data);
            })
            .catch(() => setAlert({ type: "error", message: "Error loading faculty list" }));
    }, []);

    useEffect(() => {
        const q = search.toLowerCase();
        setFiltered(
            faculty.filter(f =>
                f.facultyID.toLowerCase().includes(q) ||
                f.name.toLowerCase().includes(q)
            )
        );
    }, [search, faculty]);

    const removeFaculty = async (id) => {
        const res = await fetch(`/api/faculty/${id}`, { method: "DELETE" });
        if (res.ok) {
            setFaculty(prev => prev.filter(f => f._id !== id));
            setAlert({ type: "success", message: "Faculty removed." });
        } else {
            setAlert({ type: "error", message: "Failed to remove faculty" });
        }
    };

    return (
        <div>
            {alert && (
                <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
            )}

            {confirmBox && (
                <ConfirmModal
                    title={`Delete ${confirmBox.name}`}
                    message="Are you sure you want to delete this faculty?"
                    onConfirm={() => { removeFaculty(confirmBox.id); setConfirmBox(null); }}
                    onCancel={() => setConfirmBox(null)}
                />
            )}

            <h3 className="section-title">Faculty List</h3>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Faculty ID or Name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Specialist</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan="7" className="empty-text">No matching faculty.</td>
                        </tr>
                    )}

                    {filtered.map(f => (
                        <tr key={f._id}>
                            <td>{f.facultyID}</td>
                            <td>{f.name}</td>
                            <td>{f.contactNo}</td>
                            <td>{f.email}</td>
                            <td>{f.specialist}</td>
                            <td>{new Date(f.joiningDate).toLocaleDateString()}</td>
                            <td>
                                <button className="delete-btn" onClick={() => setConfirmBox({ id: f._id, name: f.name })}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
