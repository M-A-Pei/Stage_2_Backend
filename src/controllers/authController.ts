import { Request, Response } from "express";
import * as authController from "../services/authService";
import errorHandler from "../utils/errorHandler";

export async function login(req: Request, res: Response){
    const {username, password} = req.body
    try {
        const x = await authController.login(username, password)
        res.status(200).json(x)
    } catch (error) {
        errorHandler(res, error as unknown as Error)
    }

}

export async function register(req: Request, res: Response){
    try{
        const x = await authController.register(req.body)
        res.json({
            message: "account created successfully!",
            data: x
        })
    }catch(error){
        errorHandler(res, error as unknown as Error)
    }
}

export async function getMyInfo(req: Request, res: Response){
    try{
        const user = res.locals.user
        res.status(200).json({
            username: user.username,
            email: user.email,
            description: user.description,
            profilePic: user.profilePic
        })
    }catch(error){
        errorHandler(res, error as unknown as Error)
    }
}