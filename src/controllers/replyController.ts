import * as replyController from "../services/replyService";
import { Request, Response } from "express";

export async function findAll(req: Request, res: Response){
    const x = await replyController.findAll(Number(req.params.postId))
    res.json(x)
}

export async function create(postId: number){
    
}