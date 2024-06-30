"use server";
import { AgentExecutor } from 'langchain/agents';
import { createAgent } from './agents/agent';
import { AppAgent, ChatEntryPrototype } from '@/types/types';
import createDatabaseAgent from '@/server/createDatabaseAgent';
import { createConversation } from '@/server/createConversation';

export async function runWorkflow(symbol: string) {
  // Initialize Agent
  const agent = await createAgent();
  await createDatabaseAgent(agent);

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

  // Execute tasks
  await executeTasks(tasks);
}

export async function executeTasks(tasks: { agent: AppAgent, instructions: { input: string, url: string, response: string, agent_scratchpad: string } }[]) {
  for (const task of tasks) {
    const { agent, instructions } = task;

    // Log agentInstance to debug
    console.log('Executing task with agent:', agent);

    // Initialize Agent Execution
    const agentExecutor = new AgentExecutor({
      agent: agent.agentInstance,
      tools: []
    });
    const response = await agentExecutor.invoke(instructions);

    // Parse entry from response
    const entry = await parseEntryFromResponse(agent, response.output);

    // Ensure the agent exists in the database before creating the conversation
    const databaseAgent = await createDatabaseAgent(agent);

    // Create conversation and chat entry
    await createConversation([databaseAgent.id], [entry]);
    console.log('Created conversation in database.');
  }
}

async function parseEntryFromResponse(agent: AppAgent, message: string): Promise<ChatEntryPrototype> {
  return {
    sender: agent.id,
    receiver: null,
    message: message,
    timestamp: new Date(),
  };
}
