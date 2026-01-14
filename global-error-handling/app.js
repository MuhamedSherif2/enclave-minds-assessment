const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 404 Middleware – for routes not found
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    timestamp: new Date().toISOString(),
  });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack for debugging

  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString(),
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
