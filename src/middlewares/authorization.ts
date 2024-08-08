import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function authorization(req: Request, res: Response, next: NextFunction){
    const token = req.headers.authorization
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
     }

    const payload = jwt.verify(token, process.env.SECRET || "secret")
    
   if (!payload) {
    return res.status(401).json({ message: "Unauthorized" });
    }

    res.locals.user = payload;

    next()
}