/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Students" (
    "id" UUID NOT NULL,
    "schoolId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "id" UUID NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Properties" (
    "id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "imageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "studId" UUID NOT NULL,
    "approvedBy" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property_Status_Histories" (
    "id" UUID NOT NULL,
    "propId" UUID NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "updateApprovedBy" UUID NOT NULL,

    CONSTRAINT "Property_Status_Histories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lost_Found_Reports" (
    "id" UUID NOT NULL,
    "propId" UUID NOT NULL,
    "studId" UUID NOT NULL,
    "reportType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reportDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved" BOOLEAN NOT NULL,
    "examinedBy" UUID NOT NULL,

    CONSTRAINT "Lost_Found_Reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log_Histories" (
    "id" UUID NOT NULL,
    "studId" UUID NOT NULL,
    "adminId" UUID NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Log_Histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_schoolId_key" ON "Students"("schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Students_phone_key" ON "Students"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admins_phone_key" ON "Admins"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Properties_serialNumber_key" ON "Properties"("serialNumber");

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_studId_fkey" FOREIGN KEY ("studId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Properties" ADD CONSTRAINT "Properties_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "Admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property_Status_Histories" ADD CONSTRAINT "Property_Status_Histories_propId_fkey" FOREIGN KEY ("propId") REFERENCES "Properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property_Status_Histories" ADD CONSTRAINT "Property_Status_Histories_updateApprovedBy_fkey" FOREIGN KEY ("updateApprovedBy") REFERENCES "Admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lost_Found_Reports" ADD CONSTRAINT "Lost_Found_Reports_propId_fkey" FOREIGN KEY ("propId") REFERENCES "Properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lost_Found_Reports" ADD CONSTRAINT "Lost_Found_Reports_studId_fkey" FOREIGN KEY ("studId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lost_Found_Reports" ADD CONSTRAINT "Lost_Found_Reports_examinedBy_fkey" FOREIGN KEY ("examinedBy") REFERENCES "Admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log_Histories" ADD CONSTRAINT "Log_Histories_studId_fkey" FOREIGN KEY ("studId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log_Histories" ADD CONSTRAINT "Log_Histories_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
