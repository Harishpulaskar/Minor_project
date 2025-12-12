import React from "react";
import "./FacultyList.css";

export default function FacultyList() {
    return (
        <div>
            <h2>Faculty List</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Specialist</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>FAC001</td>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>Cardiology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
