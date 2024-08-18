import db from "../libs/db"
import { IPost } from "../types/post";

export async function addReply(reply: IPost){
    db.posts.create({
        data: {
            ...reply,
            images: {
                create: reply.images?.map((image)=>({image: image.filename}))
            }
        }
    })
}

export async function findAllInPost(postId: number){
    return await db.posts.findMany({
        where: {parentId: postId}
    })
}

export async function findAllForUser(username: string){
    return await db.posts.findMany({
        where: {
            author: {
                username
            }
        }
    })
}