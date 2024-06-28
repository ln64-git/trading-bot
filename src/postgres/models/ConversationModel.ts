import mongoose, { Schema, Document, Model } from "mongoose";
import { ConversationEntry } from "@/types/types";

interface ConversationDocument extends ConversationEntry, Document { }

const ConversationSchema: Schema = new Schema({
    index: { type: Number, required: true },
    agents: { type: [Number], required: true },
    entries: { type: [Object], required: true },
    timestamp: { type: Date, required: true },
});

const ConversationModel: Model<ConversationDocument> = mongoose.models.Conversation || mongoose.model<ConversationDocument>("Conversation", ConversationSchema);

export default ConversationModel;
