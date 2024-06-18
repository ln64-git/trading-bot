import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: Calculate the confidence score for the stock based on the following data:
  Stock Data: {stockData}
  Historical Analysis: {historyAnalysis}
  Market Strategies: {marketStrategies}
  Technical Indicators: {technicalIndicators}
  Scratchpad: {agent_scratchpad}
  
  Provide a confidence score (0-100) and a brief conclusion.
  Available tools: confidence_calculation
`);

export async function createConfidenceCalculationAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });
  const prompt = promptTemplate;

  try {
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [],
      prompt
    });
    return agent;
  } catch (error) {
    console.error('Error creating Confidence Calculation agent:', error);
    return null;
  }
}
