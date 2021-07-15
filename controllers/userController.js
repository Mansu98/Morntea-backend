const asyncHandler = require( "express-async-handler");
const User = require( "../models/User");
const generateToken = require( "../utils/generateToken.js");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      usernname: user.username,
      email: user.email,
      password:user.password,
      image:user.image,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password
  });

  if (user) {
    res.status(201).json({
        _id: user._id,
      usernname: user.username,
      email: user.email,
      password:user.password,
      image:user.image,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.name || user.username;
    user.email = req.body.email || user.email;
    user.image = req.body.image || user.image;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.username,
      email: updatedUser.email,
      password: updatedUser.password,
      image: updatedUser.image,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

module.exports = { authUser, updateUserProfile, registerUser };
