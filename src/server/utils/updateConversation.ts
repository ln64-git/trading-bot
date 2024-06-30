"use server"
import { PrismaClient } from '@prisma/client';
import { ChatEntry } from '@/types/types';

const prisma = new PrismaClient();

export async function updateConversation(conversationId: number, newEntry: ChatEntry, agentId: number) {
    try {
        // Save new Chat Entry to Database
        const chatEntry = await prisma.chatEntry.create({
            data: {
                sender: newEntry.sender,
                receiver: newEntry.receiver,
                message: newEntry.message,
                timestamp: new Date(),
                conversationId: conversationId
            },
        });

        // Update Conversation to include new Chat Entry and link to existing Agent
        const updatedConversation = await prisma.conversation.update({
            where: { id: conversationId },
            data: {
                entries: {
                    connect: { id: chatEntry.id },
                },
                agents: {
                    connect: { id: agentId },
                },
            },
            include: {
                agents: true,
                entries: true,
            },
        });

        console.log(updatedConversation);

        return updatedConversation;
    } catch (error) {
        console.error('Error updating conversation:', error);
        throw error;
    }
}