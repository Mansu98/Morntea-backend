const express = require("express");
const {
  getPostById,
  getPosts,
  CreatePost,
  DeletePost,
  UpdatePost,
} = require("../controllers/PostController.js");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");

router.route("/").get(protect, getPosts);
router
  .route("/:id")
  .get(getPostById)
  .delete(protect, DeletePost)
  .put(protect, UpdatePost);
router.route("/create").post(protect, CreatePost);

module.exports = router;