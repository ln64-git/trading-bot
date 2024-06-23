import connectDB from "@/mongo/connect-db";
import { fetchStockData } from "../functions/fetchStockData";
import ChatEntryModel from "@/mongo/models/ChatEntry";

interface ChatEntry {
  index: number; // Index of message between sender and receiver
  sender: string; // Agent sending the message
  receiver: string; // Agent receiving the message
  message: string; // Message body
  timestamp: Date; // Relevant timestamp for each message
}

async function addChatEntry(chatEntry: ChatEntry) {
  await connectDB();
  const newEntry = new ChatEntryModel(chatEntry);
  await newEntry.save();
  console.log("Added chat entry:", chatEntry);
}

export async function runAnalysisWorkflow(symbol: string) {
  const stockMetrics = await fetchStockData(symbol);
  console.log("stockMetrics: ", stockMetrics);

  // Initialize chat with Manager Agent
  const managerMessage = "Give me a financial analysis of the following stock";
  const managerReply = `Analyzing stock: ${symbol}`;

  // Add initial chat entry from user to manager
  // await addChatEntry({
  //   index: 0,
  //   sender: "User",
  //   receiver: "Manager",
  //   message: managerMessage,
  //   timestamp: new Date(),
  // });

  // Manager delegates responsibilities to agents
  // As each agents communicate with each other, create a Chat Entry
  // Add Chat Entry to database
}
