import { PrismaClient, Conversation } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getConversations(): Promise<Conversation[]> {
    try {
        const conversations = await prisma.conversation.findMany();
        return conversations;
    } catch (error) {
        console.error('Error retrieving conversations:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
