/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Chapter_title_key";

-- DropIndex
DROP INDEX "Course_title_key";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
