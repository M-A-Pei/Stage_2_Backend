import { addUser, findByEmail, findByEmailOrName, findByUsername } from "./userService";
import { IUser } from "../types/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export async function login(usernameOrEmail: string, password: string){
    const userExists = await findByEmailOrName(usernameOrEmail)
    
    
    if(userExists == null){
        throw new Error("account doesnt exist!")
    }

    const isMatch = await bcrypt.compare(password, userExists.password)

    if(!isMatch){
        throw new Error("password is wrong!")
    }

    const token = jwt.sign(userExists, process.env.SECRET || "secret", {expiresIn: "1h"})

    return token
}

export async function register(user: IUser) {
    const checkUsername = await findByUsername(user.username)

    if(checkUsername != null){
        throw new Error("username already exists")
    }

    const checkEmail = await findByEmail(user.email)

    if(checkEmail != null){
        throw new Error("email already exists")
    }

    const hashedPw = await bcrypt.hash(user.password, 10)
    user.password = hashedPw

    const newUser = await addUser(user)

    return newUser
}