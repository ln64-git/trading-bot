import mongoose, { Schema, Document } from "mongoose";

interface ChatEntry extends Document {
  index: number;
  sender: string;
  receiver: string;
  message: string;
  timestamp: Date;
}

const ChatEntrySchema: Schema = new Schema({
  index: { type: Number, required: true },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const ChatEntryModel = mongoose.model<ChatEntry>("ChatEntry", ChatEntrySchema);

export default ChatEntryModel;
