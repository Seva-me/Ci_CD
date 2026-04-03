require("dotenv").config();
const express = require("express");

const app = express();

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors());
// ENV variables
const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || "My App";

// Health check route
app.get("/", (req, res) => {
  res.json({
    message: `🚀 ${APP_NAME} is running`,
    env: process.env.NODE_ENV || "development",
  });
});

// Sample API
app.get("/api/hello", (req, res) => {
  res.json({
    success: true,
    message: "Hello from backend 👋",
    timestamp: new Date(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});