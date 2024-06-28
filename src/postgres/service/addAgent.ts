import { DatabaseAgent } from "@/types/types";
import { pool } from "../connect-db";

export const addAgent = async (agent: DatabaseAgent) => {
    try {
        const query = 'INSERT INTO agents (index, gender, color, name, role) VALUES ($1, $2, $3, $4, $5)';
        const values = [agent.index, agent.gender, agent.color, agent.name, agent.role];
        await pool.query(query, values);
        console.log('Added agent:', agent);
    } catch (error) {
        console.error('Error adding agent:', error);
        throw new Error('Failed to add agent');
    }
};
