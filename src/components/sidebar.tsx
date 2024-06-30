"use client";
import React, { useEffect, useState } from "react";
import useSidebarStore from "@/store/store";
import StatusCard from "./status-card";
import StartCard from "./start-card";
import ConversationCard from "./chat-card";
import { ChatEntry, DatabaseAgent } from "@/types/types";

interface SidebarProps {
  initialChatEntries: ChatEntry[];
  initialDatabaseAgents: DatabaseAgent[];
}

export default function Sidebar({ initialChatEntries, initialDatabaseAgents }: SidebarProps) {
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div className={`bg-gray-400 bg-opacity-10 ${isOpen ? "w-[400px]" : "w-[76px]"} h-full rounded-tl-md rounded-bl-md flex flex-col transition-width duration-300 ease-in-out`}>
      <div>
        <StatusCard />
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-2">
          {/* {initialChatEntries.length > 0 ? (
            initialChatEntries.map((conversation, index) => (
              <ConversationCard key={index} chat={initialChatEntries} />
            ))
          ) : (
            <p className="text-gray-500 text-center"></p>
          )} */}
        </div>
      </div>
      <div>
        <StartCard />
      </div>
    </div>
  );
}
