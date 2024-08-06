import { Router } from "express"
import { findAll, findPost, addPost, updatePost, deletePost } from "../controllers/postController"
import authorization from "../middlewares/authorization"
import upload from "../middlewares/fileUpload"

const postRoutes = Router()

postRoutes.get("/", findAll)
postRoutes.get("/:id", findPost)
postRoutes.post("/", authorization, upload.array("image"),addPost)
postRoutes.put("/:id", updatePost)
postRoutes.delete("/:id", deletePost)

export default postRoutes