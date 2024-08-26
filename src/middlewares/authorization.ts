import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function authorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  let payload;
  try {
    payload = jwt.verify(token, process.env.SECRET || "secret");
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.locals.user = payload;

  next();
}
