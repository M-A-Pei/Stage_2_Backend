import { Request, Response } from "express";
import * as likeService from "../services/likeService"
import errorHandler from "../utils/errorHandler";

export async function addLike(req: Request, res: Response){
    try {
        const x = await likeService.addLike(Number(req.params.postId), res.locals.user.id)
        res.json(x)
    } catch (error) {
        errorHandler(res, error as unknown as Error)
    }
}

export async function checkIfLiked(req: Request, res: Response){
    const x = await likeService.checkIfLiked(Number(req.params.postId), res.locals.user.id)
    res.json(x)
}

export async function getPostLikes(req: Request, res: Response){
    const x = await likeService.getAllPostLikes(Number(req.params.postId))
    res.json(x)
}