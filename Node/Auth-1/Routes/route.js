import express from "express";
import Register from "../Controllers/Register.js";

const router = express.Router();

router.post("/register", Register);

export default router;
