import { Response, Request } from "express"

export function findAll(req: Request, res: Response){
    res.send("find all posts")
}

export function findPost(req: Request, res: Response){
    res.send("find post")
}

export function addPost(req: Request, res: Response){
    res.send("add post")
}

export function updatePost(req: Request, res: Response){
    res.send("update post")
}

export function deletePost(req: Request, res: Response){
    res.send("delete post")
}