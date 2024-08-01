import postRoutes from "./postRoutes";
import {Router} from "express"

const route = Router()

route.use("/posts", postRoutes)

export default route

