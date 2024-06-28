"use client";
import React, { useEffect, useState } from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import StartCard from "./start-card";
import ConversationCard from "./chat-card";
import { ChatEntry } from "@/types/types";
import { getChatEntries } from "@/postgres/service/getChatEntries";

interface SidebarProps {
  initialChatEntries: ChatEntry[];
}

export default function Sidebar({ initialChatEntries }: SidebarProps) {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [chatList, setChatList] = useState<ChatEntry[]>(initialChatEntries || []);

  // useEffect(() => {
  //   async function fetchChatList() {
  //     try {
  //       const chatEntries = await getChatEntries();
  //       setChatList(chatEntries);
  //     } catch (error) {
  //       console.error("Error fetching chat entries:", error);
  //     }
  //   }

  //   fetchChatList();
  // }, []);

  return (
    <div className={`bg-gray-400 bg-opacity-10 ${isOpen ? "w-[400px]" : "w-[76px]"} h-full rounded-tl-md rounded-bl-md flex flex-col transition-width duration-300 ease-in-out`}>
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          {chatList.length > 0 ? (
            chatList.map((chat, index) => (
              <ConversationCard key={index} chat={chatList} />
            ))
          ) : (
            <p className="text-gray-500 text-center"></p>
          )}
        </div>
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
}
