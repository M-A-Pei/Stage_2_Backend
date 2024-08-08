import db from "../libs/db"
import { IPost } from "../types/post";

export async function addReply(reply: IPost){
    
}

export async function findAll(postId: number){
    db.posts.findMany({
        where: {parentId: postId}
    })
}