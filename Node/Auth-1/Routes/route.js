import express from "express";
import Register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";

const router = express.Router();

// Register
router.post("/register", Register);
// Login
router.post("/login", Login);

export default router;
