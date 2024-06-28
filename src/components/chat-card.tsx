"use client";
import useSidebarStore from "@/store/store";
import React, { useEffect, useState } from "react";
import MaleIcon from "../icons/male-icon";
import FemaleIcon from "../icons/female-icon";
import { ChatEntry, Agent, DatabaseAgent } from "@/types/types";
import { getAgent } from "@/mongo/service/getAgent";

interface ChatCardProps {
  chat: ChatEntry[];
}

export default function ChatCard({ chat }: ChatCardProps) {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const [participants, setParticipants] = useState<DatabaseAgent[]>([]);

  useEffect(() => {
    async function fetchParticipants() {
      const ids = Array.from(new Set(chat.flatMap(entry => [entry.sender, entry.receiver]).filter(id => id !== undefined)));
      const agents = await Promise.all(ids.map(id => getAgent(id!))); // Assume getAgent is a function to fetch agent details
      setParticipants(agents);
    }

    fetchParticipants();
  }, [chat]);

  return (
    <div className="flex h-full overflow-hidden">
      <button
        className={`relative h-[68px] bg-gray-600 bg-opacity-10 text-gray-400 hover:text-gray-300 font-semibold rounded-lg shadow-lg hover:bg-gray-500 hover:bg-opacity-10 focus:outline-none transition ease-in-out duration-300 transform hover:scale-105 w-full mx-2 flex items-center`}
      >
        <div className={`absolute w-14 left-0 top-0 h-full flex justify-center items-center`}>
          {participants[0] && (
            participants[0].gender === "male" ? (
              <MaleIcon color={participants[0].color} />
            ) : (
              <FemaleIcon color={participants[0].color} />
            )
          )}
        </div>
        <div className={`flex-grow flex flex-col justify-center transition-opacity duration-500 overflow-hidden whitespace-nowrap text-ellipsis ${isOpen ? "pl-16 opacity-100" : "opacity-0"}`}>
          {isOpen && participants[0] && (
            <>
              <p className="text-left whitespace-nowrap overflow-hidden text-ellipsis">
                {participants[0].name}
              </p>
              <p className="text-left text-sm font-light overflow-hidden text-ellipsis">
                {participants[0].role}
              </p>
            </>
          )}
        </div>
      </button>
    </div>
  );
}
