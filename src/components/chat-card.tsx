"use client";
import useSidebarStore from "@/store/store";
import React, { useEffect, useState } from "react";
import MaleIcon from "../icons/male-icon";
import FemaleIcon from "../icons/female-icon";
import { ChatEntry, DatabaseAgent, ParsedConversation } from "@/types/types";

interface ChatCardProps {
  data: ParsedConversation[];
}

export default function ChatCard({ data }: ChatCardProps) {
  const isOpen = useSidebarStore((state) => state.isOpen);

  // Extract the participants and the latest chat entry from the data
  const agents: DatabaseAgent[] = data.length > 0 ? data[0].agents : [];
  const latestChatEntry: ChatEntry | undefined = data.length > 0 && data[0].chatEntries.length > 0
    ? data[0].chatEntries[data[0].chatEntries.length - 1]
    : undefined;

  return (
    <div className="flex h-full overflow-hidden">
      <button
        className={`relative h-[68px] bg-gray-600 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-2 flex items-center`}
      >
        <div className={`absolute w-14 left-0 top-0 h-full flex justify-center items-center`}>
          {agents[0] && (
            agents[0].gender === "MALE" ? (
              <MaleIcon color={agents[0].color} />
            ) : (
              <FemaleIcon color={agents[0].color} />
            )
          )}
        </div>
        <div className={`flex-grow flex flex-col justify-center transition-opacity duration-500 overflow-hidden whitespace-nowrap text-ellipsis ${isOpen ? "pl-16 opacity-100" : "opacity-0"}`}>
          {isOpen && agents[0] && (
            <>
              <p className="text-left text-[.85em] whitespace-nowrap overflow-hidden text-ellipsis">
                {agents[0].name}
              </p>
              <p className="text-left text-xs  overflow-hidden text-ellipsis">
                {agents[0].role}
              </p>
              {latestChatEntry && (
                <p className="text-left text-xs font-light overflow-hidden text-ellipsis max-w-[180px]">
                  {latestChatEntry.message}
                </p>
              )}
            </>
          )}
        </div>
      </button>
    </div>
  );
}
