const express =require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
  getUsers,
} =require("../controllers/userController.js");
const { protect } =require("../middleware/authMiddleware.js");
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/editprofile").post(protect, updateUserProfile);
router.route("/").get(getUsers);

module.exports = router;