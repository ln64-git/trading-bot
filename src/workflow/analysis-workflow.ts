// server/analysis-workflow.ts
import { AgentExecutor } from 'langchain/agents';
import { addChatEntry } from '@/postgres/service/addChatEntry';
import { addAgent } from '@/postgres/service/addAgent';
import { createAgent } from './agents/agent';
import { connectDB, pool } from '@/postgres/connect-db';

export async function runAnalysisWorkflow(symbol: string) {
  await connectDB(); // Ensure PostgreSQL is connected

  // Initialize Agents
  const agent = await createAgent();
  await addAgent(agent);

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
  const chatEntry = {
    index: await getHighestAgentIndex(),
    sender: agent.index,
    receiver: undefined,
    message: response.response,
    timestamp: new Date(),
  };
  await addChatEntry(chatEntry);
}




const getHighestAgentIndex = async () => {
  try {
    const result = await pool.query('SELECT MAX(index) AS max_index FROM agents');
    return result.rows[0].max_index || 0;
  } catch (error) {
    console.error('Error getting highest agent index:', error);
    throw new Error('Failed to get highest agent index');
  }
};
