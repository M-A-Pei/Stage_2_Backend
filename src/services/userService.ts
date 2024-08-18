import db from "../libs/db"
import { IUser } from "../types/user"
import bcrypt from "bcrypt"

export async function findAll(){
    return await db.users.findMany()
}

export async function findById(id: number){
    return await db.users.findUnique({
        where: {
            id: id
        },
        select: {
            username: true,
            description: true,
            email: true,
            id: true,
            profilePic: true
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

export async function update(user: IUser){
    const oldUser = await findByEmail(user.email)

    if(oldUser == null){
        throw new Error("this user doesnt exist")
    }

    const isMatch = await bcrypt.compare(user.password, oldUser.password)

    if(!isMatch){
        throw new Error("password is wrong!")
    }

    if(user.profilePic){
        return await db.users.update({
            data: {
                username : user.username,
                description: user.description,
                profilePic: user.profilePic
            },
            where: {
                id : user.id
            }
        })
    }else{
        return await db.users.update({
            data: {
                username : user.username,
                description: user.description
            },
            where: {
                id : user.id
            }
        })
    }

    
}

export async function deleteUser(id: number){
    return await db.users.delete({
        where: {
            id: id
        }
    })
}

