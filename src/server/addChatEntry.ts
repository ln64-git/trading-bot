import { PrismaClient } from '@prisma/client';
import { ChatEntry } from '@/types/types';

const prisma = new PrismaClient();

export default async function addChatEntry(
    entry: ChatEntry
): Promise<ChatEntry> {
    try {
        const newChatEntry = await prisma.chatEntry.create({
            data: entry,
        });
        return newChatEntry;
    } catch (error) {
        console.error('Error adding chat entry:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}