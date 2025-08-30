// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";   // ✅ your db.js
import authRoutes from "./routes/authRoutes.js"; // ✅ your auth routes

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
