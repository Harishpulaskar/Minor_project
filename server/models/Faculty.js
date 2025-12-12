const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
    facultyID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialist: { type: String, required: true },
    joiningDate: { type: Date, required: true },
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Faculty", FacultySchema);
