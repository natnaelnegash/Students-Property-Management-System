-- AlterTable
ALTER TABLE "Properties" ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Refresh_Tokens" (
    "id" UUID NOT NULL,
    "refresh_token" TEXT NOT NULL,

    CONSTRAINT "Refresh_Tokens_pkey" PRIMARY KEY ("id")
);
