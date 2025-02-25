const express = require("express");
const router = express.Router();

const { createCommunity, getCommunities, getCommunityById } = require("../controllers/communityController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new community (requires authentication)
router.post("/", authMiddleware, createCommunity);

// Get all communities
router.get("/", getCommunities);

// Get a specific community by ID
router.get("/:id", getCommunityById);

module.exports = router;
