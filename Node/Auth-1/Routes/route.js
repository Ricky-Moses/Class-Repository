import express from "express";
import Register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";
import Protect from "../Middleware/Protect.js";
import Profile from "../Controllers/Profile.js";

const router = express.Router();

// Register
router.post("/register", Register);

// Login
router.post("/login", Login)

// Profile
router.get("/profile", Protect, Profile)
export default router;
