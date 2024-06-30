import { PrismaClient } from '@prisma/client';
import { AppAgent, DatabaseAgent } from '@/types/types';

const prisma = new PrismaClient();

export default async function addDatabaseAgent(agent: AppAgent): Promise<DatabaseAgent> {
    try {
        const { gender, color, name, role } = agent;
        const newAgent = await prisma.agent.create({
            data: {
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
