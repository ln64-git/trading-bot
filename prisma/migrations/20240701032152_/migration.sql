/*
  Warnings:

  - You are about to drop the `_AgentConversations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AgentConversations" DROP CONSTRAINT "_AgentConversations_A_fkey";

-- DropForeignKey
ALTER TABLE "_AgentConversations" DROP CONSTRAINT "_AgentConversations_B_fkey";

-- DropTable
DROP TABLE "_AgentConversations";

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
