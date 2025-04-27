/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `Admins` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `Admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admins" ADD COLUMN     "adminId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admins_adminId_key" ON "Admins"("adminId");
