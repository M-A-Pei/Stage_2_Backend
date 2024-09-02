import { Router } from "express";
import { findAllForUser, create, findAllInPost } from "../controllers/replyController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";
import { uploadCloudinary } from "../middlewares/cloudinary";

const replyRoutes = Router()

replyRoutes.get("/:postId", findAllInPost) //get all replies to a post
replyRoutes.get("/user/:username", findAllForUser) //get all replies to a post
replyRoutes.post("/:postId", authorization, upload.array("image", 4), uploadCloudinary, create) //make a new reply to a post

export default replyRoutes