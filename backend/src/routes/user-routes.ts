import { Router } from "express";
import { getAllUsers, loginUser } from "../controllers/user-controller.js";

// Route for login
const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/login", loginUser);

export default userRoutes;
