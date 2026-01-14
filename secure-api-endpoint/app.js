const express = require("express");
const app = express();
const userRoutes = require("./routers/userRoutes");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
