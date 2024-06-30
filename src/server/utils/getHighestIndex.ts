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
        if (conversation.index > highestIndex) {
            highestIndex = conversation.index;
        }
    }
    return highestIndex;
}

async function getHighestChatEntryIndex(): Promise<number> {
    const entries = await getChatEntries();
    let highestIndex = -1;
    for (const entry of entries) {
        if (entry.index > highestIndex) {
            highestIndex = entry.index;
        }
    }
    return highestIndex;
}

export { getHighestAgentIndex, getHighestConversationIndex, getHighestChatEntryIndex };
