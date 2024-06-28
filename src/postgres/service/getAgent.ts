import { AgentDB } from "@/types/types";
import AgentModel from "@/mongo/models/AgentModel";
import { connectDB } from "../connect-db";

export async function getAgent(id: number): Promise<AgentDB> {
    await connectDB();

    const agentEntry = await AgentModel.findOne({ index: id }).lean().exec();
    if (!agentEntry) {
        throw new Error(`Agent with id ${id} not found`);
    }

    // Map the Mongoose document to the AgentDB type
    const agent: AgentDB = {
        index: agentEntry.index,
        gender: agentEntry.gender,
        color: agentEntry.color,
        name: agentEntry.name,
        role: agentEntry.role,
    };

    return agent;
}
