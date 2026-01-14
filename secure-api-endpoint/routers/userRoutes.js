const express = require("express");
const router = express.Router();
const { validateUserData , getUserData} = require("../controllers/userController");

router.post("/data", validateUserData);
router.get("/", getUserData);

module.exports = router;
