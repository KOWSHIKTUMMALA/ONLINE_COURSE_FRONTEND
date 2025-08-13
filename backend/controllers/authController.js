const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Signup
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "Email already exists" });

    const user = await User.create({ username, email, password }); // plain text

    const token = generateToken(user._id);
    res.status(201).json({ user: { id: user._id, username: user.username, email: user.email }, token });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(401).json({ message: "Invalid email or password" });

    const token = generateToken(user._id);
    res.status(200).json({ user: { id: user._id, username: user.username, email: user.email }, token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update password (plain text, using userId from frontend)
const updatePassword = async (req, res) => {
  const { userId, oldPassword, newPassword } = req.body;
  if (!userId || !oldPassword || !newPassword)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== oldPassword)
      return res.status(401).json({ message: "Old password is incorrect" });

    user.password = newPassword; // plain text
    await user.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Update password error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signup, login, updatePassword };
