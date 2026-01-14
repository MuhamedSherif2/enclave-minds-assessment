const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Login Route (Mock)
router.post("/login", (req, res) => {
  const { username } = req.body;

  // Normally validate user from DB
  const payload = { username };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({
    success: true,
    token
  });
});

module.exports = router;
