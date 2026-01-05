import express from "express";
import Register from "../Controllers/Register.js";
import Login from "../Controllers/Login.js";

const routes = express.Router();

routes.post("/register", Register);
routes.post("/login", Login);

export default routes;
