/*
  Warnings:

  - You are about to drop the column `userId` on the `Member` table. All the data in the column will be lost.
  - Added the required column `coachId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_userId_fkey";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "userId",
ADD COLUMN     "coachId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "UserType";

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
