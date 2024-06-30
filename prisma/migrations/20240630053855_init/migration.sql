-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "color" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatEntry" (
    "id" SERIAL NOT NULL,
    "sender" INTEGER,
    "receiver" INTEGER,
    "message" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conversationId" INTEGER,

    CONSTRAINT "ChatEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AgentToConversation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "idx_agent_name" ON "Agent"("name");

-- CreateIndex
CREATE INDEX "idx_chatentry_timestamp" ON "ChatEntry"("timestamp");

-- CreateIndex
CREATE INDEX "idx_conversation_timestamp" ON "Conversation"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "_AgentToConversation_AB_unique" ON "_AgentToConversation"("A", "B");

-- CreateIndex
CREATE INDEX "_AgentToConversation_B_index" ON "_AgentToConversation"("B");

-- AddForeignKey
ALTER TABLE "ChatEntry" ADD CONSTRAINT "ChatEntry_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgentToConversation" ADD CONSTRAINT "_AgentToConversation_A_fkey" FOREIGN KEY ("A") REFERENCES "Agent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AgentToConversation" ADD CONSTRAINT "_AgentToConversation_B_fkey" FOREIGN KEY ("B") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
