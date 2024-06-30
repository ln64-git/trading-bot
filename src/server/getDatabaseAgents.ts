import { PrismaClient } from '@prisma/client';
import { DatabaseAgent } from '@/types/types';

const prisma = new PrismaClient();

export default async function getDatabaseAgents(): Promise<DatabaseAgent[]> {
    try {
        const agents = await prisma.databaseAgent.findMany();
        return agents.map(agent => ({
            ...agent,
            gender: agent.gender as "male" | "female"
        }));
    } catch (error) {
        console.error('Error retrieving agents:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}