import { PrismaClient, Agent } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getDatabaseAgent(id: number): Promise<Agent | null> {
    try {
        const agent = await prisma.agent.findUnique({
            where: {
                id: id,
            },
        });
        return agent;
    } catch (error) {
        console.error('Error retrieving agent:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
