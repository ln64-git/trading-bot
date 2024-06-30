"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function wipeDatabase() {
    try {
        await prisma.databaseAgent.deleteMany();
        await prisma.chatEntry.deleteMany();
        await prisma.conversation.deleteMany();
        console.log('Database wiped successfully.');
    } catch (error) {
        console.error('Error wiping database:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

wipeDatabase().catch((e) => {
    console.error(e);
    process.exit(1);
});
