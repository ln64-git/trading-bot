"use server"
import { AgentExecutor } from 'langchain/agents';
import { createAgent } from './agents/agent';
import addDatabaseAgent from '@/server/addDatabaseAgent';
import addChatEntry from '@/server/addChatEntry';
import { ChatEntry } from '@/types/types';
import { getHighestChatEntryIndex } from '@/server/utils/getHighestIndex';

export async function runAnalysisWorkflow(symbol: string) {
  // Initialize Agents
  const agent = await createAgent();
  await addDatabaseAgent(agent);

  // Initialize Agent Execution
  const agentExecutor = new AgentExecutor({
    agent: agent.agent,
    tools: []
  });
  const response = await agentExecutor.invoke({
    input: "analyze the following website and compress into 3-5 sentences",
    url: "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)",
    response: "",
    agent_scratchpad: ""
  });
  console.log(response);

  // Save Chat Entry to Database
  const chatEntry: ChatEntry = {
    id: await getHighestChatEntryIndex() + 1,
    sender: agent.id,
    receiver: null, 
    message: response.response,
    timestamp: new Date(),
  };
  await addChatEntry(chatEntry);
}
