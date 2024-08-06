import authRoutes from "./authRoutes";
import postRoutes from "./postRoutes";
import userRoutes from "./userRoutes";

import {Router} from "express"

const route = Router()

route.use("/posts", postRoutes)
route.use("/users", userRoutes)
route.use("/auth", authRoutes)

export default route

