export interface ChatInfo {
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

interface StockData {
  id: string;
  class: string;
  exchange: string;
  symbol: string;
  name: string;
  status: string;
  tradable: boolean;
  marginable: boolean;
  maintenance_margin_requirement: number;
  shortable: boolean;
  easy_to_borrow: boolean;
  additional_features: string[];
}

export interface AlpacaConfig {
  ALPACA_API_KEY: string;
  ALPACA_SECRET_KEY: string;
  ALPACA_PAPER_API_KEY: string;
  ALPACA_PAPER_SECRET_KEY: string;
}
