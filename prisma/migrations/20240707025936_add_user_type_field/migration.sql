-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('MEMBER', 'COACH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" "UserType" NOT NULL DEFAULT 'MEMBER';
