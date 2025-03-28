const express = require("express");
const postController = require("../controller/postController.js")
const router = express.Router();

// Index
router.get("/", postController.index)

// Show
router.get("/:id", postController.show)

// Store 
router.post("/", postController.store)

// Update 
router.put("/:id", postController.update)

// Patch 
router.patch("/:id", postController.patch)

// Destroy 
router.delete("/:id", postController.destroy)

module.exports = router;