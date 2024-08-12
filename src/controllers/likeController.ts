import { Request, Response } from "express";
import * as likeService from "../services/likeService"

export async function addLike(req: Request, res: Response){
    const x = await likeService.addLike(Number(req.params.postId), res.locals.user.id)
    res.json(x)
}

export async function deleteLike(req: Request, res: Response){
    const x = await likeService.deleteLike(Number(req.params.postId), res.locals.user.id)
    res.json(x)
}