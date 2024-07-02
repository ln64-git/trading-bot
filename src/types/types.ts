// Type Definitions

export type Gender = 'MALE' | 'FEMALE';
export type DatabaseGender = 'MALE' | 'FEMALE';

import { AgentAction, AgentFinish, AgentStep } from "langchain/agents";
import { AgentRunnableSequence } from "node_modules/langchain/dist/agents/agent";
export type AgentInstance = AgentRunnableSequence<{ steps: AgentStep[] }, AgentAction | AgentFinish>;

export interface DatabaseAgent {
  id: number;
  name: string;
  role: string;
  color: string;
  gender: DatabaseGender;
}

export interface AppAgent {
  id: number;
  gender: "male" | "female";
  color: string;
  name: string;
  role: string;
  agentInstance: AgentInstance;
}

export interface ChatEntry {
  id: number;
  sender: number | null;
  receiver: number | null;
  message: string;
  timestamp: Date;
  conversationId: number | null; // Allow this to be null
}

export interface Conversation {
  id: number;
  agents: DatabaseAgent[]; // Array of DatabaseAgent objects
  entries: ChatEntry[]; // Array of ChatEntry objects
  timestamp: Date;
}

export interface ParsedConversation {
  id: number;
  agents: DatabaseAgent[];
  chatEntries: ChatEntry[];
}

export interface ChatEntryPrototype {
  sender: number | null;
  receiver: number | null;
  message: string;
  timestamp: Date;
}
