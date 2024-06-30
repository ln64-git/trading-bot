// File: updateConversation.ts
import { ChatEntry } from '@/types/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateConversation(conversationId: number, newEntry: ChatEntry, agentId: number): Promise<void> {
    try {
        // Save new Chat Entry to Database
        const chatEntry = await prisma.chatEntry.create({
            data: {
                sender: newEntry.sender,
                receiver: newEntry.receiver,
                message: newEntry.message,
                timestamp: newEntry.timestamp,
                conversationId: conversationId
            },
        });

        // Update Conversation to include new Chat Entry and link to existing Agent
        await prisma.conversation.update({
            where: { id: conversationId },
            data: {
                entries: {
                    connect: { id: chatEntry.id },
                },
                agents: {
                    connect: { id: agentId },
                },
            },
        });

        console.log(`Updated conversation ${conversationId} with new entry ${chatEntry.id}`);
    } catch (error) {
        console.error('Error updating conversation:', error);
        throw error;
    }
}