import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getConversations() {
    try {
        const conversations = await prisma.conversation.findMany({
            include: {
                agents: true,
                entries: true,
            },
        });
        return conversations;
    } catch (error) {
        console.error('Error fetching conversations:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
