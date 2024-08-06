import { Posts } from "@prisma/client";

export interface IPost extends Posts{
    images: Express.Multer.File[]
}