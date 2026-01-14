const User = require("../models/userModel");

exports.validateUserData = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ error: "Invalid email format" });
  if (!password) return res.status(400).json({ error: "Password is required" });
  if (password.length < 8) return res.status(400).json({ error: "Password must be at least 8 characters long" });

  try {
    const newUser = await User.create({ email, password });
    return res.status(200).json({ message: "User saved successfully", user: newUser });
  } catch (err) {

    return res.status(500).json({ error: err.message });
  }
};

exports.getUserData = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ users });
};