const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// Protected test route
const authenticateToken = require("./middleware/auth");

app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: `Welcome ${req.user.username}`
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
