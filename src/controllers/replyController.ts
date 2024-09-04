import * as replyService from "../services/replyService";
import { Request, Response } from "express";

export async function findAllInPost(req: Request, res: Response) {
    const x = await replyService.findAllInPost(Number(req.params.postId))
    res.json(x)
}

export async function findAllForUser(req: Request, res: Response) {
    const x = await replyService.findAllForUser(req.params.username)
    res.json(x)
}

export async function create(req: Request, res: Response) {
    req.body.parentId = Number(req.params.postId)
    req.body.userId = res.locals.user.id

    const x = await replyService.addReply(req.body)
    res.json(x)
}