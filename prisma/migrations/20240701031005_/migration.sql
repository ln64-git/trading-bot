/*
  Warnings:

  - You are about to drop the column `databaseAgentId` on the `Conversation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_databaseAgentId_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "databaseAgentId";

-- CreateTable
CREATE TABLE "_AgentConversations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AgentConversations_AB_unique" ON "_AgentConversations"("A", "B");

-- CreateIndex
CREATE INDEX "_AgentConversations_B_index" ON "_AgentConversations"("B");

-- AddForeignKey
ALTER TABLE "_AgentConversations" ADD CONSTRAINT "_AgentConversations_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgentConversations" ADD CONSTRAINT "_AgentConversations_B_fkey" FOREIGN KEY ("B") REFERENCES "DatabaseAgent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
