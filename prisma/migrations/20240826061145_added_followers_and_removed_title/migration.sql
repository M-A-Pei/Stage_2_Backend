/*
  Warnings:

  - You are about to drop the column `title` on the `Posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "title";

-- CreateTable
CREATE TABLE "_userFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userFollows_AB_unique" ON "_userFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_userFollows_B_index" ON "_userFollows"("B");

-- AddForeignKey
ALTER TABLE "_userFollows" ADD CONSTRAINT "_userFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userFollows" ADD CONSTRAINT "_userFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
