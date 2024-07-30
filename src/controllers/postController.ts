import { Request, Response, NextFunction } from "express";
import baseController from "./baseController";

export default class postController extends baseController{
    public findAll(req: Request, res: Response, next: NextFunction){
        res.send("find all posts")
    }

    public findPost(req: Request, res: Response, next: NextFunction){
        res.send("find a post")
    }
}