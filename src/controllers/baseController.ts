import { Request, Response, NextFunction } from "express";

export default abstract class baseController{
    abstract findAll(req: Request, res: Response, next: NextFunction): void
    abstract findPost(req: Request, res: Response, next: NextFunction): void
}