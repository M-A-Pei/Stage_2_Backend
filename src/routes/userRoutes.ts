import { Router } from "express";
import { findAll, findById, findByUsername ,updateUser, deleteUser, } from "../controllers/userController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";

const userRoutes = Router()

userRoutes.get("/", findAll)
userRoutes.get("/byId/:id", findById)
userRoutes.get("/byName/:username", findByUsername)
userRoutes.put("/", authorization, upload.single("image") ,updateUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes