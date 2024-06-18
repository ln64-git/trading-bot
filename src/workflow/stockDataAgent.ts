// utils/agent.ts

import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StockDataTool } from "../tools/utils/yahoo";

// Define the prompt template for user interaction
const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: stock_data
  Use stock_data tool to fetch current stock data such as price, volume, market cap, dividend yield, EPS, P/E ratio, and revenue .
`);

/**
 * Function to create an agent with tools and a prompt template.
 * This agent is configured to interact with various tools, including stock data.
 * @returns {Promise<any>} Returns the created agent or null if an error occurs.
 */
export async function createStockDataAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });

  try {
    // Create agent with OpenAI functions, including StockDataTool for stock data interactions
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [StockDataTool],
      prompt: promptTemplate,
    });
    return agent;
  } catch (error) {
    console.error("Error creating OpenAI functions agent:", error);
    return null;
  }
}
