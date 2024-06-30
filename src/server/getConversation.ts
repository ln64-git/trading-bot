import { PrismaClient, Conversation } from '@prisma/client';

const prisma = new PrismaClient();

export default async function getConversation(id: number): Promise<Conversation | null> {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: {
        id: id,
      },
    });
    return conversation;
  } catch (error) {
    console.error('Error retrieving conversation:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
