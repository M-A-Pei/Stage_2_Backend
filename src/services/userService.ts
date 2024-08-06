import db from "../libs/db"
import { IUser } from "../types/user"

export async function findAll(){
    return await db.users.findMany()
}

export async function findById(id: number){
    return await db.users.findUnique({
        where: {
            id: id
        }
    })
}

export async function findByUsername(username: string){
    return await db.users.findFirst({
        where: {
            username: username
        }
    })
}

export async function addUser(user: IUser){
    return await db.users.create({
        data: {
            ...user
        }
    })
}

export async function updatePost(id: number, user: IUser){
    return await db.users.update({
        data: {
            ...user
        },
        where: {
            id: id
        }
    })
}

export async function deletePost(id: number){
    return await db.users.delete({
        where: {
            id: id
        }
    })
}

