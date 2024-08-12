import { Router } from "express";
import { addLike, deleteLike } from "../controllers/likeController";
import authorization from "../middlewares/authorization";

const likeRoutes = Router()

likeRoutes.post("/:postId", authorization, addLike)
likeRoutes.delete("/:postId", authorization, deleteLike)

export default likeRoutes