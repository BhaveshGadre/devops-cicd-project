const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Employee Management API - CI/CD Successful 🚀");
});

app.get("/health", (req, res) => {
    res.send("API Status: Healthy");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});