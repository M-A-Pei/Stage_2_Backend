import { Router } from "express";
import { addUser, findAll, findById, findByUsername ,updateUser, deleteUser, } from "../controllers/userController";

const userRoutes = Router()

userRoutes.get("/", findAll)
userRoutes.get("/byId/:id", findById)
userRoutes.get("/byName/:username", findByUsername)
userRoutes.post("/", addUser)
userRoutes.put("/:id", updateUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes