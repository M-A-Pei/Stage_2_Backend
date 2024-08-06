-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "parentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
