import { PrismaClient } from '@prisma/client';
import { AppAgent, DatabaseAgent } from '@/types/types';

const prisma = new PrismaClient();

export default async function createDatabaseAgent(agent: AppAgent): Promise<DatabaseAgent> {
    try {
        // Map gender values from AppAgent to DatabaseAgent
        const mappedGender = agent.gender === 'male' ? 'MALE' : 'FEMALE';

        const newAgent = await prisma.databaseAgent.create({
            data: {
                gender: mappedGender, // Use the mapped gender value
                color: agent.color,
                name: agent.name,
                role: agent.role,
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
