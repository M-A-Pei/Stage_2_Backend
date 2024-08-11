import { Response, Request } from "express"
import * as userService from "../services/userService"
import errorHandler from "../utils/errorHandler"

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
    req.body.id = res.locals.user.id

    if(req.files){
        req.body.profilePic = req.files
    }

    try {
        const x = await userService.update(req.body)
        res.json(x)
    } catch (error) {
        errorHandler(res, error as unknown as Error)
    }

}

export async function deleteUser(req: Request, res: Response){
    const x = await userService.deleteUser(Number(req.params.id))
    res.json(x)
} 