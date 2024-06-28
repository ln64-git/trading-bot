import mongoose, { Schema, Document, Model } from "mongoose";
import { AgentDB } from "@/types/types";

interface AgentDocument extends AgentDB, Document { }

const AgentSchema: Schema = new Schema({
    index: { type: Number, required: true },
    gender: { type: String, required: true },
    color: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
});

const AgentModel: Model<AgentDocument> = mongoose.model<AgentDocument>("Agent", AgentSchema);

export default AgentModel;
