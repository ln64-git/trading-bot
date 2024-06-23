interface ChatInfo {
  agent: Agent;
  chatHistory: ChatEntry[];
}

interface ChatEntry {
  index: number;
  sender: string;
  reciver: string;
  message: string;
  timestamp: Date;
}

interface Agent {
  color: string;
  gender: "male" | "female";
}
