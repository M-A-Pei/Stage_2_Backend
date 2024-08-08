import { Router } from "express";
import { findAll, create } from "../controllers/replyController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";

const replyRoutes = Router()

replyRoutes.get("/:postId", findAll) //get all replies to a post
replyRoutes.post("/:postId", authorization, upload.array("image") ,create) //make a new reply to a post

export default replyRoutes