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



// export interface DatabaseAgent {
//   id: number;
//   name: string;
//   role: string;
//   color: string;
//   gender: DatabaseGender;
// }


// export interface AppAgent {
//   id: number;
//   gender: "male" | "female";
//   color: string;
//   name: string;
//   role: string;
// }


// export interface ChatEntry {
//   id: number;
//   sender: number | null;
//   receiver: number | null;
//   message: string;
//   timestamp: Date;
//   conversationId: number;
// }



// export interface Conversation {
//   id: number;
//   agents: number[]; // Array of agent IDs
//   entries: number[]; // Array of entry IDs
//   timestamp: Date;
// }

// export interface ParsedConversation {
//   id: number;
//   agents: DatabaseAgent[];
//   chatEntries: ChatEntry[];
// }

// export interface ConversationPrototype {
//   agents: number[];
//   entries: any[];
//   timestamp: Date;
// }

// export interface StockData {
//   id: string;
//   class: string;
//   exchange: string;
//   symbol: string;
//   name: string;
//   status: string;
//   tradable: boolean;
//   marginable: boolean;
//   maintenance_margin_requirement: number;
//   shortable: boolean;
//   easy_to_borrow: boolean;
//   additional_features: string[];
// }

// export interface AlpacaConfig {
//   ALPACA_API_KEY: string;
//   ALPACA_SECRET_KEY: string;
//   ALPACA_PAPER_API_KEY: string;
//   ALPACA_PAPER_SECRET_KEY: string;
// }
