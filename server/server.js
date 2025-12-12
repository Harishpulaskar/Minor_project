require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const facultyRoutes = require("./routes/faculty");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Routes
app.use("/api/faculty", facultyRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("PG Assessment Tool Backend Running...");
});

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
