import db from "../libs/db";
import { IUser } from "../types/user";
import bcrypt from "bcrypt";

export async function findAll() {
  return await db.users.findMany();
}

export async function findById(id: number) {
  return await db.users.findUnique({
    where: {
      id: id,
    },
    include: {
      posts: {
        include: {
          images: true,
        }
      }
    }
  });
}

export async function findByUsername(username: string) {
  return await db.users.findFirst({
    where: {
      username,
    },
  });
}

export async function findBySearch(username: string) {
  return await db.users.findMany({
    where: {
      username: {
        contains: username,
        mode: "insensitive",
      },
    },
  });
}

export async function findByEmail(email: string) {
  return await db.users.findFirst({
    where: {
      email,
    },
  });
}

export async function findByEmailOrName(string: string) {
  return await db.users.findFirst({
    where: {
      OR: [
        {
          username: string,
        },
        {
          email: string,
        },
      ],
    },
  });
}

export async function addUser(user: IUser) {
  return await db.users.create({
    data: {
      ...user,
    },
  });
}

export async function update(user: IUser) {
  const oldUser = await findByEmail(user.email);

  if (oldUser == null) {
    throw new Error("this user doesnt exist");
  }

  const isMatch = await bcrypt.compare(user.password, oldUser.password);

  if (!isMatch) {
    throw new Error("password is wrong!");
  }

  return await db.users.update({
    data: {
      username: user.username,
      description: user.description,
    },
    where: {
      email: user.email,
    },
  });
}

export async function updateAvatar(userId: number, profilePic: string) {
  return await db.users.update({
    where: {
      id: userId
    },
    data: {
      profilePic
    }
  })
}

export async function updateBanner(userId: number, banner: string) {
  return await db.users.update({
    where: {
      id: userId
    },
    data: {
      bannerPic: banner
    }
  })
}

export async function deleteUser(id: number) {
  return await db.users.delete({
    where: {
      id: id,
    },
  });
}
