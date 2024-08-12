import db from "../libs/db"

export async function addLike(postId: number, userId: number){
    return await db.like.create({
        data: {
            postId, userId
        }
    })
}

export async function deleteLike(postId: number, userId: number){
    // return await db.like.delete({
    //     where: {
    //         postId_userId: ["postId": postId, "userId": userId]
    //     }
    // })
}