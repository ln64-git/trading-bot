/*
  Warnings:

  - You are about to drop the column `agents` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `databaseAgentId` on the `Conversation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_databaseAgentId_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "agents",
DROP COLUMN "databaseAgentId";

-- CreateTable
CREATE TABLE "_ConversationToDatabaseAgent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConversationToDatabaseAgent_AB_unique" ON "_ConversationToDatabaseAgent"("A", "B");

-- CreateIndex
CREATE INDEX "_ConversationToDatabaseAgent_B_index" ON "_ConversationToDatabaseAgent"("B");

-- AddForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" ADD CONSTRAINT "_ConversationToDatabaseAgent_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" ADD CONSTRAINT "_ConversationToDatabaseAgent_B_fkey" FOREIGN KEY ("B") REFERENCES "DatabaseAgent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
