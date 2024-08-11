import { Router } from "express";
import { addUser, findAll, findById, findByUsername ,updateUser, deleteUser, } from "../controllers/userController";
import authorization from "../middlewares/authorization";

const userRoutes = Router()

userRoutes.get("/", findAll)
userRoutes.get("/byId/:id", findById)
userRoutes.get("/byName/:username", findByUsername)
userRoutes.put("/", authorization ,updateUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes