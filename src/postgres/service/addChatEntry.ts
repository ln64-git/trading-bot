import { ChatEntry } from "@/types/types";
import { pool } from "../connect-db";

export const addChatEntry = async (chatEntry: ChatEntry) => {
    try {
        const query = 'INSERT INTO chat_entries (index, sender, receiver, message, timestamp) VALUES ($1, $2, $3, $4, $5)';
        const values = [chatEntry.index, chatEntry.sender, chatEntry.receiver, chatEntry.message, chatEntry.timestamp];
        await pool.query(query, values);
        console.log('Added chat entry:', chatEntry);
    } catch (error) {
        console.error('Error adding chat entry:', error);
        throw new Error('Failed to add chat entry');
    }
};
