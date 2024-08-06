import { Router } from "express";
import { register, login } from "../controllers/authController";

const authRoutes  =Router()

authRoutes.post("/login", login)
authRoutes.post("/register", register)

export default authRoutes