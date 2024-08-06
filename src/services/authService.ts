import { addUser, findByUsername } from "./userService";
import { IUser } from "../types/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export async function login(username: string, password: string){
    const userExists = await findByUsername(username)
    
    if(userExists == null){
        throw new Error("account doesnt exist")
    }

    const isMatch = await bcrypt.compare(password, userExists.password)

    if(!isMatch){
        throw new Error("password is wrong")
    }

    const token = jwt.sign(userExists, process.env.SECRET || "secret", {expiresIn: "1h"})

    return token
}

export async function register(user: IUser) {
    const userExists = await findByUsername(user.username)

    if(userExists != null){
        throw new Error("username already exists")
    }

    const hashedPw = await bcrypt.hash(user.password, 10)
    user.password = hashedPw

    const newUser = await addUser(user)

    return newUser
}