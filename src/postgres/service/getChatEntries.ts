"use server";
import ChatEntryModel from "@/mongo/models/ChatEntryModel";
import { ChatEntry } from "@/types/types";
import { connectDB } from "../connect-db";

export async function getChatEntries(): Promise<ChatEntry[]> {
    await connectDB();

    try {
        const chatEntries = await ChatEntryModel.find().sort({ timestamp: -1 }).lean().exec();
        console.log("Fetched chat entries:", chatEntries);
        return chatEntries.map(entry => ({
            index: entry.index,
            sender: entry.sender,
            receiver: entry.receiver,
            message: entry.message,
            timestamp: entry.timestamp // Keep original timestamp
        }));
    } catch (error) {
        console.error("Error fetching chat entries:", error);
        throw new Error("Failed to fetch chat entries");
    }
}
