import db from "../libs/db"

export async function addLike(postId: number, userId: number){
    const check = await checkIfLiked(postId, userId)
    if(check) return await deleteLike(postId, userId)

    return await db.like.create({
        data: {
            postId, userId
        }
    })
}

export async function deleteLike(postId: number, userId: number){
    return await db.like.delete({
        where: {
            postId_userId: {postId, userId}
        }
    })
}

export async function getAllPostLikes(postId: number){
    return await db.like.findMany({
        where: {
            postId
        }
    })
}

export async function checkIfLiked(postId:number, userId:number){
    const likesList = await getAllPostLikes(postId)             //ambil semua like dari suatu post
    let x = false
    likesList.forEach((e)=>{
        if(e.userId == userId){                                 //cek satu satu klo udh di like atau blm
            x = true
        }
    })
    return x
}