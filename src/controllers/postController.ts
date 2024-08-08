import { Response, Request } from "express"
import * as postService from "../services/postService"

export async function findAll(req: Request, res: Response){
    const x = await postService.findAll()
    res.json(x)
}

export async function findPost(req: Request, res: Response){
    const x = await postService.findOne(Number(req.params.id))
    res.json(x)
}

export async function addPost(req: Request, res: Response){
    req.body.userId = res.locals.user.id

    if(req.files){
        req.body.image = req.files
    }
    const x = await postService.addPost(req.body)
    res.json(x)
}

export async function updatePost(req: Request, res: Response){
    const x = await postService.updatePost(req.body, Number(req.params.id))
    res.json(x)
}

export async function deletePost(req: Request, res: Response){
    const x = await postService.deletePost(Number(req.params.id)) 
    res.json(x)
} 