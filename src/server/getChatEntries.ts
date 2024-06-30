import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getChatEntries() {
    try {
        const chatEntries = await prisma.chatEntry.findMany();
        return chatEntries;
    } catch (error) {
        console.error('Error retrieving chat entries:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
