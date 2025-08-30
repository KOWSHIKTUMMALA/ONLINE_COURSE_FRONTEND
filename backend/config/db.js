import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected to database: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
