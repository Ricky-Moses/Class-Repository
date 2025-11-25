import express from "express";
import Register from "../Controllers/Register.js";

const router = express.Router();

// Register
router.post("/register", Register);

export default router;
