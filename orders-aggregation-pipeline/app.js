const express = require("express");
const connectDB = require("./config/db");
const ordersRoute = require("./routes/orders");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/orders", ordersRoute);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
