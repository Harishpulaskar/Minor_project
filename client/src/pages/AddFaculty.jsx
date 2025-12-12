import React from "react";
import "./AddFaculty.css";

export default function AddFaculty() {
    return (
        <div className="add-form">
            <h2>Add Faculty</h2>

            <label>Faculty ID</label>
            <input />

            <label>Name</label>
            <input />

            <label>Email</label>
            <input />

            <label>Specialist</label>
            <input />

            <button>Add</button>
        </div>
    );
}
