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

    // Minimal input for initial debugging
    const result = await agentExecutor.invoke({
      input: "weather for New York",
      agent_scratchpad: ""
    });

    console.log('Agent Output:', result.output);
  } catch (error) {
    console.error('Error running workflow:', error);
  }
}

runWorkflow().catch(error => console.error('Error starting workflow:', error));
