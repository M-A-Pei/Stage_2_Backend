import db from "../libs/db";

export async function findAllFollowing(userId: number) {
  return await db.users.findMany({
    where: {
      followers: {
        some: {
          id: userId,
        },
      },
    },
  });
}

export function findAllFollowers(userId: number) {
  return db.users.findMany({
    where: {
      following: {
        some: {
          id: userId,
        },
      },
    },
  });
}

export async function follow(followerId: number, followedId: number) {
  const x = await isFollowing(followerId, followedId);

  if (x) {
    return await unfollow(followerId, followedId);
  }

  return await db.users.update({
    where: {
      id: followerId,
    },
    data: {
      following: {
        connect: {
          id: followedId,
        },
      },
    },
  });
}

async function unfollow(followerId: number, followedId: number) {
  return await db.users.update({
    where: {
      id: followerId,
    },
    data: {
      following: {
        disconnect: {
          id: followedId,
        },
      },
    },
  });
}

export async function isFollowing(followerId: number, followedId: number) {
  const response = await db.users.findUnique({
    where: {
      id: followerId,
    },
    select: {
      following: {
        where: {
          id: followedId,
        },
      },
    },
  });
  if (response && response.following.length > 0) {
    return true;
  }
  return false;
}
