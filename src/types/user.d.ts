import { Users } from "@prisma/client";

export interface IUser extends Users{
    images: Express.Multer.File[]
}