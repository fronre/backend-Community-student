const express = require("express");
const router = express.Router();

const { createPost, getPostsByCommunity, getPostById } = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a new post (requires authentication)
router.post("/", authMiddleware, createPost);

// Get all posts for a specific community
router.get("/community/:communityId", getPostsByCommunity);

// Get a specific post by ID
router.get("/:id", getPostById);

module.exports = router;
