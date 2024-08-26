import db from "../libs/db";
import { IPost } from "../types/post";

export async function addReply(reply: IPost) {
  await db.posts.create({
    data: {
      ...reply,
      images: {
        create: reply.images?.map((image) => ({ image: image.filename })),
      },
    },
  });
}

export async function findAllInPost(postId: number) {
  return await db.posts.findMany({
    where: { parentId: postId },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          profilePic: true,
        },
      },
    },
  });
}

export async function findAllForUser(username: string) {
  return await db.posts.findMany({
    where: {
      author: {
        username,
      },
    },
  });
}
