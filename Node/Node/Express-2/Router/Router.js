import express from "express";
import register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";
import Protect from "../Middleware/AuthMiddleware.js";
import Profile from "../Controllers/Profile.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", Login);
route.get("/profile", Protect, Profile);

export default route;
