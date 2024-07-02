"use client";
import React from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import StartCard from "./start-card";
import ConversationCard from "./chat-card";
import { ParsedConversation } from "@/types/types";

type SidebarProps = {
  initialConversationData: ParsedConversation[];
};

export default function Sidebar({ initialConversationData }: SidebarProps) {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className={`bg-gray-400 bg-opacity-10 ${isOpen ? "w-[400px]" : "w-[76px]"} h-full rounded-tl-md rounded-bl-md flex flex-col transition-width duration-300 ease-in-out`}>
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          {initialConversationData.length > 0 ? (
            initialConversationData.map((conversation) => (
              <ConversationCard key={conversation.id} {...conversation} />
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
