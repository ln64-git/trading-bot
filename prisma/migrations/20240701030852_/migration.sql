/*
  Warnings:

  - You are about to drop the `_ConversationToDatabaseAgent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" DROP CONSTRAINT "_ConversationToDatabaseAgent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" DROP CONSTRAINT "_ConversationToDatabaseAgent_B_fkey";

-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "databaseAgentId" INTEGER;

-- DropTable
DROP TABLE "_ConversationToDatabaseAgent";

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_databaseAgentId_fkey" FOREIGN KEY ("databaseAgentId") REFERENCES "DatabaseAgent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
