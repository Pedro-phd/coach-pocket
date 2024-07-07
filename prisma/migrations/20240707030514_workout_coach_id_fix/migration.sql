/*
  Warnings:

  - You are about to drop the column `userId` on the `Workout` table. All the data in the column will be lost.
  - Added the required column `coachId` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_userId_fkey";

-- DropIndex
DROP INDEX "Workout_title_userId_idx";

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "userId",
ADD COLUMN     "coachId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Workout_title_coachId_idx" ON "Workout"("title", "coachId");

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
