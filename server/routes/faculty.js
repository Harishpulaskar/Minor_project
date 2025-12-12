const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");

// GET all faculty
router.get("/", async (req, res) => {
    try {
        const rows = await Faculty.find().sort({ createdAt: -1 }).lean();
        const safe = rows.map(({ passwordHash, __v, ...rest }) => rest);
        res.json(safe);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// CREATE faculty
router.post("/", async (req, res) => {
    try {
        const {
            facultyID, name, contactNo, email, specialist, joiningDate, username, password
        } = req.body;

        // Required validation
        if (!facultyID || !name || !contactNo || !email || !specialist || !joiningDate || !username || !password)
            return res.status(400).json({ message: "All fields required" });

        // Password validation
        if (password.length < 8)
            return res.status(400).json({ message: "Password must be at least 8 characters" });

        // Duplicate checks
        if (await Faculty.findOne({ facultyID }))
            return res.status(400).json({ message: "Faculty ID already exists" });

        if (await Faculty.findOne({ username }))
            return res.status(400).json({ message: "Username already exists" });

        if (await Faculty.findOne({ email }))
            return res.status(400).json({ message: "Email already exists" });

        const passwordHash = await bcrypt.hash(password, 10);

        const doc = new Faculty({
            facultyID,
            name,
            contactNo,
            email,
            specialist,
            joiningDate: new Date(joiningDate),
            username,
            passwordHash
        });

        await doc.save();

        res.status(201).json({ success: true, message: "Faculty created", facultyId: doc._id });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// DELETE faculty
router.delete("/:id", async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id))
            return res.status(400).json({ message: "Invalid ID" });

        const deleted = await Faculty.findByIdAndDelete(req.params.id);

        if (!deleted)
            return res.status(404).json({ message: "Faculty not found" });

        res.json({ success: true, message: "Faculty removed" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
