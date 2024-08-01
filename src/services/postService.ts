import db from "../libs/db"
import { IPost } from "../types/post"

export async function findAll(){
    return await db.posts.findMany()
}

export async function findOne(id: number){
    return await db.posts.findUnique({
        where: {id}
    })
}

export async function addPost(post: IPost){
    return await db.posts.create({
        data: {
            ...post
        }
    })
}

export async function updatePost(post: IPost, id: number){
    return await db.posts.update({
        where: {
            id: id
        },
        data: {
            ...post
        }
    })
}

export async function deletePost(id: number){
    return await db.posts.delete({
        where: {
            id: id
        }
    })
}