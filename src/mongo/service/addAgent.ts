import connectDB from "@/mongo/connect-db";
import { Agent } from "@/types/types";
import AgentModel from "../models/AgentModel";

export async function addAgent(agent: Agent) {
    await connectDB();
    const newAgent = new AgentModel(agent);
    await newAgent.save();
    console.log("Added agent:", agent);
}
