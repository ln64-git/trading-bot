import { PrismaClient } from '@prisma/client';
import { Agent, DatabaseAgent } from '@/types/types';

const prisma = new PrismaClient();

export default async function addDatabaseAgent(agent: Agent): Promise<DatabaseAgent> {
    try {
        const { index, gender, color, name, role } = agent;
        const newAgent = await prisma.agent.create({
            data: {
                index,
                gender,
                color,
                name,
                role,
            },
        }) as DatabaseAgent; // Cast the result to DatabaseAgent
        return newAgent;
    } catch (error) {
        console.error('Error adding agent:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
