import { AgentExecutor } from "langchain/agents";
import { createAgent } from "./agents";

export async function runWorkflow(symbol: string) {
    try {
      const agent = await createAgent();
  
      if (!agent) {
        throw new Error('Failed to create agent.');
      }
  
      const agentExecutor = new AgentExecutor({
        agent,
        tools: [],
        maxIterations: 5
      });
  
      const result = await agentExecutor.invoke({
        input: `Fetch stock data for ${symbol} and tell me if it's a good time to buy.`,
        agent_scratchpad: ""
      });
  
      console.log('Agent Output:', result.output);
    } catch (error) {
      console.error('Error running workflow:', error);
    }
  }
  