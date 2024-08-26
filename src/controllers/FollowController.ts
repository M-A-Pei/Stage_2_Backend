import { Request, Response } from "express";
import * as followService from "../services/followService";

export async function findAllFollowers(req: Request, res: Response) {
  const x = await followService.findAllFollowers(res.locals.user.id);
  res.json(x);
}

export async function findAllFollowing(req: Request, res: Response) {
  const x = await followService.findAllFollowing(res.locals.user.id);
  res.json(x);
}

export async function follow(req: Request, res: Response) {
  const x = await followService.follow(
    res.locals.user.id,
    Number(req.params.userId)
  );
  res.json(x);
}

export async function isFollowing(req: Request, res: Response) {
  const x = await followService.isFollowing(
    res.locals.user.id,
    Number(req.params.userId)
  );
  res.json(x);
}
