import { PrismaClient, Conversation } from '@prisma/client';

const prisma = new PrismaClient();

export async function addConversation(agentIds: number[], entryData: { sender: number | null, receiver: number | null, message: string, timestamp: Date }[]): Promise<Conversation> {
    try {
        const newConversation = await prisma.conversation.create({
            data: {
                timestamp: new Date(),
                agents: {
                    connect: agentIds.map(id => ({ id })),
                },
                entries: {
                    create: entryData,
                },
            },
            include: {
                agents: true,
                entries: true,
            },
        });
        return newConversation;
    } catch (error) {
        console.error('Error adding conversation:', error);
        throw error;
    }
}

