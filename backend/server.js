const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://your-frontend-name.vercel.app" // change this to your real Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json()); // ✅ parse JSON bodies

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;

// ✅ Connect to DB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("DB connection failed:", err));
