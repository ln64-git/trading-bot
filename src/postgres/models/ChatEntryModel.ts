import mongoose, { Schema, Document, Model } from "mongoose";
import { ChatEntry } from "@/types/types";

interface ChatEntryDocument extends ChatEntry, Document { }

const ChatEntrySchema: Schema = new Schema({
  index: { type: Number, required: true },
  sender: { type: Number, required: false },
  receiver: { type: Number, required: false },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const ChatEntryModel: Model<ChatEntryDocument> = (mongoose.models && mongoose.models.ChatEntry)
  ? mongoose.model<ChatEntryDocument>("ChatEntry")
  : mongoose.model<ChatEntryDocument>("ChatEntry", ChatEntrySchema);

export default ChatEntryModel;
