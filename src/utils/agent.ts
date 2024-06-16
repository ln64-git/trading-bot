import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OllamaFunctions } from "@langchain/community/experimental/chat_models/ollama_functions";
import { WeatherDataTool } from "./weather"; // Adjust the import path as per your project structure

const promptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  Scratchpad: {agent_scratchpad}
  Available tools: weather_data
`);

export async function createAgent() {
  const baseUrl = "http://127.0.0.1:11434"; // Adjust as needed
  const functionModel = new OllamaFunctions({ temperature: 0.1, model: "llama3", baseUrl });
  const prompt = promptTemplate;

  try {
    console.log('Creating OpenAIFunctionsAgent...');
    const agent = await createOpenAIFunctionsAgent({
      llm: functionModel,
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
