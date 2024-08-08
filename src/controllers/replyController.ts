import * as replyController from "../services/replyService";
import { Request, Response } from "express";

export async function findAll(req: Request, res: Response){
    const x = await replyController.findAll(Number(req.params.postId))
    res.json(x)
}

export async function create(req: Request, res: Response){
    req.body.parentId = Number(req.params.postId)
    req.body.userId = res.locals.user.id

    if(req.files){
        req.body.image = req.files
    }

    const x = await replyController.addReply(req.body)
    res.json(x)
}