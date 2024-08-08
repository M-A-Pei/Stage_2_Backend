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

export async function findAll(postId: number){
    db.posts.findMany({
        where: {parentId: postId}
    })
}