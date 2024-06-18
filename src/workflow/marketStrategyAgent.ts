import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { MarketStrategyTool } from "../tools/marketStrategy";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: market_strategy
`);

export async function createMarketStrategyAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });
  const prompt = promptTemplate;
  try {
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [MarketStrategyTool],
      prompt
    });
    return agent;
  } catch (error) {
    console.error('Error creating MarketStrategy agent:', error);
    return null;
  }
}
