import { PrismaClient, ChatEntry } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getChatEntry(id: number): Promise<ChatEntry | null> {
    try {
        const chatEntry = await prisma.chatEntry.findUnique({
            where: {
                id: id,
            },
        });
        return chatEntry;
    } catch (error) {
        console.error('Error retrieving chat entry:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
