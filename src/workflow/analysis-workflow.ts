import { AgentExecutor } from "langchain/agents";
import { ChatEntry } from "@/types/types";
import { createAgent } from "./agents/agent";
import { addAgent } from "@/mongo/service/addAgent";
import { addChatEntry } from "@/mongo/service/addChatEntry";
import { getHighestAgentIndex } from "@/utils/utils";

export async function runAnalysisWorkflow(symbol: string) {
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
  const chatEntry: ChatEntry = {
    index: await getHighestAgentIndex(),
    sender: agent.index,
    receiver: undefined,
    message: response.response,
    timestamp: new Date(),
  };
  await addChatEntry(chatEntry);
}




// Testing
// const stockMetrics = await fetchStockData(symbol);
// const managerMessage = "Give me a financial analysis of the following stock";
// const managerReply = `Analyzing stock: ${symbol}`;

// Manager delegates responsibilities to agents
// As each agents communicate with each other, create a Chat Entry
// Add Chat Entry to database

// await addChatEntry({
//   index: 0,
//   sender: agent.index,
//   message: managerMessage,
//   timestamp: new Date(),
// });