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
            username
        }
    })
}

export async function findByEmail(email: string){
    return await db.users.findFirst({
        where: {
            email
        }
    })
}

export async function findByEmailOrName(string:string) {
    return await db.users.findFirst({
        where: {
            OR: [
                {
                    username: string
                },
                {
                    email: string
                }
            ]
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
            id
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

