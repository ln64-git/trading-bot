// main.ts
import { createAgent } from "./utils/agent";
import { AgentExecutor } from "langchain/agents";

async function runWorkflow() {
  try {
    console.log('Creating agent...');
    const agent = await createAgent();

    if (!agent) {
      throw new Error('Failed to create agent.');
    }

    console.log('Agent created.');

    const agentExecutor = new AgentExecutor({
      agent,
      tools: [],
      maxIterations: 5 // Lower the max iterations for initial debugging
    });

    console.log('Agent Executor created.');

    // Improved input to clearly instruct the agent to use StockDataTool
    const result = await agentExecutor.invoke({
      input: "Fetch stock data for NVDA and tell me if it's a good time to buy.",
      agent_scratchpad: ""
    });

    console.log('Agent Output:', result.output);
  } catch (error) {
    console.error('Error running workflow:', error);
  }
}

runWorkflow().catch(error => console.error('Error starting workflow:', error));

