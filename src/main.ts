// main.ts
import { createAgent } from "./utils/agent";
import { AgentExecutor } from "langchain/agents";

async function runWorkflow() {
  try {
    const agent = await createAgent();

    // Example usage of AgentExecutor
    const agentExecutor = new AgentExecutor({
      agent,
      tools: []
    });

    // Example input
    const result = await agentExecutor.invoke({
      input: "analyze the following website and compress into 3-5 sentences",
      url: "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)",
      agent_scratchpad: ""

    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runWorkflow().catch(error => console.log(error))