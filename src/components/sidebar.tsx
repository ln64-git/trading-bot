"use client";
import React, { useEffect, useState } from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import StartCard from "./start-card";
import ChatCard from "./chat-card";
import { generatedChatList } from "@/utils/utils";

export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [chatList, setChatList] = useState<ChatInfo[]>([]);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChatList() {
      const response = await fetch("/api/chat-list");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: ChatInfo[] = await response.json();
      setChatList(data);
    }
    // fetchChatList();
    setChatList(generatedChatList);
  }, []);

  return (
    <div
      className={`bg-gray-400 bg-opacity-10 ${
        isOpen ? "w-[400px]" : "w-[76px]"
      } h-full rounded-tl-md rounded-bl-md flex flex-col transition-width duration-300 ease-in-out`}
    >
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          {chatList.map((chat, index) => (
            <ChatCard key={index} chat={chat} />
          ))}
        </div>
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
}
