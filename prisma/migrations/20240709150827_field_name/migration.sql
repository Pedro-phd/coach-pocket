/*
  Warnings:

  - You are about to drop the column `Document` on the `Member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "Document",
ADD COLUMN     "document" TEXT;
