"use server"
import { PrismaClient } from '@prisma/client';
import { AgentExecutor } from 'langchain/agents';
import { createAgent } from './agents/agent';
import addDatabaseAgent from '@/server/addDatabaseAgent';
import { getHighestChatEntryIndex } from '@/server/utils/getHighestIndex';
import { AppAgent, ChatEntry } from '@/types/types';
import { addConversation } from '@/server/addConversation';

export async function runAnalysisWorkflow(symbol: string) {
  // Initialize Agent
  const agent = await createAgent();
  await addDatabaseAgent(agent);

  // Define tasks for agents
  const tasks = [
    {
      agent: agent,
      instructions: {
        input: "analyze the following website and compress into 3-5 sentences",
        url: "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)",
        response: "",
        agent_scratchpad: ""
      }
    }
  ];

  // Initialize Workflow
  await startWorkflow(tasks);
}

export async function startWorkflow(tasks: { agent: AppAgent, instructions: { input: string, url: string, response: string, agent_scratchpad: string } }[]) {
  for (const task of tasks) {
    const { agent, instructions } = task;

    // Initialize Agent Execution
    const agentExecutor = new AgentExecutor({
      agent: agent.agent,
      tools: []
    });

    const response = await agentExecutor.invoke(instructions);
    console.log(response);

    // Get highest chat entry index
    const highestIndex = await getHighestChatEntryIndex();

    // New Chat Entry data
    const newEntry: ChatEntry = {
      id: highestIndex + 1,
      sender: agent.id,
      receiver: null,
      message: response.response,
      timestamp: new Date(),
    };

    // Create a new conversation for each agent
    const entries = [{
      sender: newEntry.sender,
      receiver: newEntry.receiver,
      message: newEntry.message,
      timestamp: newEntry.timestamp,
    }];

    const newConversation = await addConversation([agent.id], entries);
    console.log('New conversation created:', newConversation);
  }
}
