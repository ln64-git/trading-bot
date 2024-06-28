import { createOpenAIFunctionsAgent } from "langchain/agents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OllamaFunctions } from "@langchain/community/experimental/chat_models/ollama_functions";
import { Agent } from "@/types/types";
import { generateRandomColor, generateRandomGender } from "@/utils/utils";
import { getChatEntries } from "@/postgres/service/getChatEntries";

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

    const newAgent: Agent = {
        index: highestIndex + 1,
        gender: generateRandomGender(),
        color: generateRandomColor(),
        name: `Agent ${highestIndex + 1}`,
        role: "Agent Role",
        agent: agentInstance
    };

    return newAgent;
}

async function getHighestAgentIndex(): Promise<number> {
    const entries = await getChatEntries();
    let highestIndex = -1;
    for (const entry of entries) {
        if (entry.sender !== undefined && entry.sender > highestIndex) {
            highestIndex = entry.sender;
        }
        if (entry.receiver !== undefined && entry.receiver > highestIndex) {
            highestIndex = entry.receiver;
        }
    }
    return highestIndex;
}
