import { Router } from "express";
import { register, login, getMyInfo } from "../controllers/authController";
import authorization from "../middlewares/authorization";

const authRoutes  =Router()

authRoutes.post("/login", login)
authRoutes.post("/register", register)
authRoutes.get("/", authorization, getMyInfo)

export default authRoutes