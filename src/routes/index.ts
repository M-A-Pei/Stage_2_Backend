import postRoutes from "./postRoutes";
import userRoutes from "./userRoutes";
import {Router} from "express"

const route = Router()

route.use("/posts", postRoutes)
route.use("/users", userRoutes)

export default route

