import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OllamaFunctions } from "@langchain/community/experimental/chat_models/ollama_functions";
import { WeatherDataTool } from "./weather"; // Adjust the import path as per your project structure
import { ChatOllama } from "@langchain/community/chat_models/ollama";

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: weather_data
`);

export async function createAgent() {
  const llm = new ChatOllama({
    baseUrl: "http://localhost:11434", 
    model: "llama3", 
  });

  const prompt = promptTemplate;

  try {
    console.log('Creating OpenAIFunctionsAgent...');
    const agent = await createOpenAIFunctionsAgent({
      llm,
      tools: [WeatherDataTool],
      prompt
    });
    console.log('Agent created successfully.');
    return agent;
  } catch (error) {
    console.error('Error creating OpenAI functions agent:', error);
    return null;
  }
}
