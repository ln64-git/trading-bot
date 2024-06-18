import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { HistoryAnalysisTool } from "../tools/historyAnalysis";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: history_analysis
`);

export async function createHistoryAnalysisAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model: "llama3",
  });
  const prompt = promptTemplate;

  try {
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [HistoryAnalysisTool],
      prompt
    });
    return agent;
  } catch (error) {
    console.error('Error creating HistoryAnalysis agent:', error);
    return null;
  }
}
