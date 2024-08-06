import { Response, Request } from "express"
import * as userService from "../services/userService"

export async function findAll(req: Request, res: Response){
    const x = await userService.findAll()
    res.json(x)
}

export async function findById(req: Request, res: Response){
    const x = await userService.findById(Number(req.params.id))
    res.json(x)
}

export async function findByUsername(req: Request, res: Response){
    const x = await userService.findByUsername(req.params.username)
    res.json(x)
}

export async function addUser(req: Request, res: Response){
    const x = await userService.addUser(req.body)
    res.json(x)
}

export async function updateUser(req: Request, res: Response){
    const x = await userService.updatePost(Number(req.params.id), req.body)
    res.json(x)
}

export async function deleteUser(req: Request, res: Response){
    const x = await userService.deletePost(Number(req.params.id))
    res.json(x)
} 