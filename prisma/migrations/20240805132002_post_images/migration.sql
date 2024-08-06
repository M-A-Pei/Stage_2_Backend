-- CreateTable
CREATE TABLE "PostImages" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostImages" ADD CONSTRAINT "PostImages_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
