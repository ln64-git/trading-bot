/*
  Warnings:

  - You are about to drop the `Agent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Agent";

-- CreateTable
CREATE TABLE "DatabaseAgent" (
    "id" SERIAL NOT NULL,
    "gender" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "DatabaseAgent_pkey" PRIMARY KEY ("id")
);
