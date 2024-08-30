import db from "../libs/db";
import { IPost } from "../types/post";

export async function findAll() {
  return await db.posts.findMany({
    where: {
      parentId: null,
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          profilePic: true,
        },
      },
      comments: true,
      images: true,
    },
  });
}

export async function findOne(id: number) {
  return await db.posts.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          profilePic: true,
        },
      },
      comments: true,
      images: true,
    },
  });
}

export async function addPost(post: IPost) {
  return await db.posts.create({
    data: {
      ...post,
      images: {
        create: post.images
      }
    },
  });
}

export async function updatePost(post: IPost, id: number) {
  return await db.posts.update({
    where: {
      id,
    },
    data: {
      body: post.body,
    },
  });
}

export async function deletePost(id: number) {
  return await db.posts.delete({
    where: {
      id,
    },
  });
}
