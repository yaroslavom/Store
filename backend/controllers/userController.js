import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generatedToken from "../utils/generateTokens.js";

// @desc   Get user profile
// @route   GET /api/users/profile
// @desc   Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if(user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404);
    throw new Error('User not found')
  }
});

// @desc   Auth user & get token
// @route   POST /api/users/login
// @desc   Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});
