import { Router } from "express";
import { findAll, create } from "../controllers/replyController";

const replyRoutes = Router()

replyRoutes.get("/:postId", findAll) //get all replies to a post
replyRoutes.post("/:postId", create) //make a new reply to a post

export default replyRoutes