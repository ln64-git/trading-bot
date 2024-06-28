import connectDB from "@/mongo/connect-db";
import { ChatEntry } from "@/types/types";
import ChatEntryModel from "../models/ChatEntryModel";

export async function addChatEntry(chatEntry: ChatEntry) {
    await connectDB();
    const newEntry = new ChatEntryModel(chatEntry);
    await newEntry.save();
    console.log("Added chat entry:", chatEntry);
}
