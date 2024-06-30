import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OllamaFunctions } from "@langchain/community/experimental/chat_models/ollama_functions";
import { Agent } from "@/types/types";
import { generateRandomColor, generateRandomGender } from "@/utils/utils";
import { getHighestAgentIndex } from "@/server/utils/getHighestIndex";

// Mock ChatPromptTemplate with required input variables including URL
const mockPromptTemplate = ChatPromptTemplate.fromTemplate(`
  User: {input}
  URL: {url}
  Agent: {response}
  Scratchpad: {agent_scratchpad}
`);

export async function createAgent(): Promise<Agent> {
    const baseUrl = "http://127.0.0.1:11434";
    const functionModel = new OllamaFunctions({ temperature: 0.1, model: "llama3", baseUrl });

    const prompt = mockPromptTemplate;

    const agentInstance = await createOpenAIFunctionsAgent({
        llm: functionModel,
        tools: [],
        prompt
    });

    const highestIndex = await getHighestAgentIndex();

    const gender = generateRandomGender(); // Ensure this returns "male" or "female"
    const color = generateRandomColor();
    const name = `Agent ${highestIndex + 1}`;
    const role = "Agent Role";

    const newAgent: Agent = {
        index: highestIndex + 1,
        gender,
        color,
        name,
        role,
        agent: agentInstance
    };

    return newAgent;
}