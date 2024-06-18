import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { IndicatorAnalysisTool } from "../tools/indicatorAnalysis";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: indicator_analysis
`);

export async function createIndicatorAnalysisAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });
  const prompt = promptTemplate;

  try {
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [IndicatorAnalysisTool],
      prompt
    });
    return agent;
  } catch (error) {
    console.error('Error creating IndicatorAnalysis agent:', error);
    return null;
  }
}
