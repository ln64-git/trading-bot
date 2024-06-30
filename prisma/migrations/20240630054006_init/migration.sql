/*
  Warnings:

  - You are about to drop the `Agent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AgentToConversation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AgentToConversation" DROP CONSTRAINT "_AgentToConversation_A_fkey";

-- DropForeignKey
ALTER TABLE "_AgentToConversation" DROP CONSTRAINT "_AgentToConversation_B_fkey";

-- DropTable
DROP TABLE "Agent";

-- DropTable
DROP TABLE "_AgentToConversation";

-- CreateTable
CREATE TABLE "DatabaseAgent" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "DatabaseAgent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ConversationToDatabaseAgent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "idx_agent_name" ON "DatabaseAgent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ConversationToDatabaseAgent_AB_unique" ON "_ConversationToDatabaseAgent"("A", "B");

-- CreateIndex
CREATE INDEX "_ConversationToDatabaseAgent_B_index" ON "_ConversationToDatabaseAgent"("B");

-- AddForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" ADD CONSTRAINT "_ConversationToDatabaseAgent_A_fkey" FOREIGN KEY ("A") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConversationToDatabaseAgent" ADD CONSTRAINT "_ConversationToDatabaseAgent_B_fkey" FOREIGN KEY ("B") REFERENCES "DatabaseAgent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
