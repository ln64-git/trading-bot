// ChatCard Component

"use client";
import React from "react";
import useSidebarStore from "@/store/store";
import { ChatEntry, ParsedConversation } from "@/types/types";
import { useRouter } from "next/navigation";
import MaleIcon from "@/icons/male-icon";
import FemaleIcon from "@/icons/female-icon";

export default function ChatCard({ id, agents = [], chatEntries = [] }: ParsedConversation) {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const router = useRouter();

  // Extract the latest chat entry from the data
  const latestChatEntry: ChatEntry | undefined = chatEntries.length > 0
    ? chatEntries[chatEntries.length - 1]
    : undefined;

  return (
    <div className="flex h-full overflow-hidden">
      <button
        onClick={() => { router.push(`/` + id.toString()) }}
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
              <p className="text-left text-xs overflow-hidden text-ellipsis">
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