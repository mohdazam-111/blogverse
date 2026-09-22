import express from "express";

import {
  login,
  logout,
  me,
  signup,
} from "../controllers/user.js";

import {
  requireAuth,
} from "../middleware/auth.js";

const router = express.Router();


// Signup
router.post("/signup", signup);


// Login
router.post("/login", login);


// Logout
router.post("/logout", logout);


// Current logged-in user
router.get("/me", requireAuth, me);


export default router;