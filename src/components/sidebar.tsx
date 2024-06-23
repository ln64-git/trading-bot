"use client";
import React, { useEffect, useState } from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import StartCard from "./start-card";
import { generatedChatList } from "@/utils/utils";
import ChatCard from "./chat-card";

export default function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [chatList, setChatList] = useState<ChatInfo[]>([]);

  useEffect(() => {
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
