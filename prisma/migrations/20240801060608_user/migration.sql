-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);
