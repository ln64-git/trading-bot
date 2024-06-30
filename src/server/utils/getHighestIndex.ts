import getChatEntries from "@/server/getChatEntries";
import getConversations from "@/server/getConversations";

async function getHighestAgentIndex(): Promise<number> {
    const entries = await getChatEntries();
    let highestIndex = -1;
    for (const entry of entries) {
        if (entry.sender !== null && entry.sender !== undefined && entry.sender > highestIndex) {
            highestIndex = entry.sender;
        }
        if (entry.receiver !== null && entry.receiver !== undefined && entry.receiver > highestIndex) {
            highestIndex = entry.receiver;
        }
    }
    return highestIndex;
}

async function getHighestConversationIndex(): Promise<number> {
    const conversations = await getConversations();
    let highestIndex = -1;
    for (const conversation of conversations) {
        if (conversation.id > highestIndex) {
            highestIndex = conversation.id;
        }
    }
    return highestIndex;
}

async function getHighestChatEntryIndex(): Promise<number> {
    const entries = await getChatEntries();
    let highestIndex = -1;
    for (const entry of entries) {
        if (entry.id > highestIndex) {
            highestIndex = entry.id;
        }
    }
    return highestIndex;
}

export { getHighestAgentIndex, getHighestConversationIndex, getHighestChatEntryIndex };
