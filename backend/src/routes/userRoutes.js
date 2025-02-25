const express = require("express");
const { register, login, getUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Register a new user
router.post("/register", register);

// Login
router.post("/login", login);

// Get user profile (requires authentication)
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
