import { Router } from "express";
import { addLike, checkIfLiked, getPostLikes } from "../controllers/likeController";
import authorization from "../middlewares/authorization";


const likeRoutes = Router()

likeRoutes.post("/:postId", authorization, addLike)
likeRoutes.get("/check/:postId", authorization, checkIfLiked)
likeRoutes.get("/:postId", getPostLikes)

export default likeRoutes