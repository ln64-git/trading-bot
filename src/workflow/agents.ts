// utils/agent.ts
import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { WeatherDataTool } from "../tools/weather";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StockDataTool } from "../tools/yahoo";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: weather_data, stock_data
  Use stock_data tool to fetch stock data if needed.
`);

export async function createAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });
  const prompt = promptTemplate;

  try {
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [WeatherDataTool, StockDataTool],
      prompt
    });
    return agent;
  } catch (error) {
    console.error('Error creating OpenAI functions agent:', error);
    return null;
  }
}

