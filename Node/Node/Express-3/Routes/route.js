import express from "express";
import Register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";
import Protect from "../Middleware/authMiddleware.js";
import Profile from "../Controllers/Profile.js";

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login", Login);
routes.get("/profile", Protect, Profile);

export default routes;
