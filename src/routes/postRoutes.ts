import { Router } from "express"
import { findAll, findPost, addPost, updatePost, deletePost } from "../controllers/postController"
import authorization from "../middlewares/authorization"
import upload from "../middlewares/fileUpload"
import { uploadCloudinary } from "../middlewares/cloudinary"

const postRoutes = Router()

postRoutes.get("/", findAll)
postRoutes.get("/:id", findPost)
postRoutes.post("/", authorization, upload.array("images", 4), uploadCloudinary, addPost)
postRoutes.put("/:id", updatePost)
postRoutes.delete("/:id", deletePost)

export default postRoutes