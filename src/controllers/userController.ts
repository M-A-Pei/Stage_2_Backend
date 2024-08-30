import { Response, Request } from "express";
import * as userService from "../services/userService";
import errorHandler from "../utils/errorHandler";

export async function findAll(req: Request, res: Response) {
  const x = await userService.findAll();
  res.json(x);
}

export async function findById(req: Request, res: Response) {
  const x = await userService.findById(Number(req.params.id));
  res.json(x);
}

export async function findByUsername(req: Request, res: Response) {
  const x = await userService.findByUsername(req.params.username);
  res.json(x);
}

export async function findBySearch(req: Request, res: Response) {
  const x = await userService.findBySearch(req.params.username);
  res.json(x);
}

export async function addUser(req: Request, res: Response) {
  const x = await userService.addUser(req.body);
  res.json(x);
}

export async function updateUser(req: Request, res: Response) {
 
  try {
    const x = await userService.update(req.body);
    console.log(req.body)
    res.json(x);
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
}

export async function updateAvatar(req: Request, res: Response) {
  
  try {
    if(req.file){
        req.body.profilePic =  req.file?.filename
    }
    const x = await userService.updateAvatar(res.locals.user.id, req.body.profilePic);
    res.json(x);
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
}

export async function updateBanner(req: Request, res: Response) {
  try {
    if(req.file){
        req.body.banner =  req.file?.filename
    }
    const x = await userService.updateBanner(res.locals.user.id, req.body.banner);
    res.json(x);
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  const x = await userService.deleteUser(Number(req.params.id));
  res.json(x);
}
