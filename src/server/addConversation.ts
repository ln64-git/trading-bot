import { PrismaClient, Conversation } from '@prisma/client';

const prisma = new PrismaClient();

export default async function addConversation(
    agents: number[],
    entries: any[]
): Promise<Conversation> {
    try {
        const newConversation = await prisma.conversation.create({
            data: {
                agents,
                entries,
            },
        });
        return newConversation;
    } catch (error) {
        console.error('Error adding conversation:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
