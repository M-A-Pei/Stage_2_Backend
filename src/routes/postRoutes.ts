import { Router } from "express"
import { findAll, findPost, addPost, updatePost, deletePost } from "../controllers/postController"

const postRoutes = Router()

postRoutes.get("/", findAll)
postRoutes.get("/:id", findPost)
postRoutes.post("/", addPost)
postRoutes.put("/:id", updatePost)
postRoutes.delete("/:id", deletePost)

export default postRoutes